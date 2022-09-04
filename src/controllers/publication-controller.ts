import nftService from '@/services/nft-service'
import {
  FileNotUploadedException,
  InvalidValueException,
} from '@/types/error.types'
import e, { NextFunction, Request, Response } from 'express'
import { validatePublicationAssetMetadata } from '@/utils/asset.validator'
import { UploadedFile } from 'express-fileupload'
import { AssetService } from '@/services/asset-service'
import { INFTMetadata } from '@/db/nft-storage'
import { Publication, PublicationModel } from '@/models/publication'
import { PublicationService } from '@/services/publication-service'

const PUBLICATION_FILE_UPLOAD_NAME = 'publicationFile'

export class PublicationController {
  async getAllPublicationNFTs(req: Request, res: Response, next: NextFunction) {
    const page = Number(req.query.page) || 0
    const searchText = req.query.searchText

    const data: PublicationModel[] =
      await PublicationService.getPublicationEntries({
        searchText: !!searchText && (searchText as string),
        page,
      })

    res.locals.data = { searchResult: data }
    next()
  }

  async getPublicationNFT(req: Request, res: Response, next: NextFunction) {
    // Get identifier from param
    const { params } = req
    res.locals.data = req
    next()
  }

  async getPublicationNFTStatus(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    next()
  }

  async createPublicationNFT(req: Request, res: Response, next: NextFunction) {
    // Get pdf file path
    if (!req.files || !req.files[PUBLICATION_FILE_UPLOAD_NAME]) {
      throw new FileNotUploadedException('No files were uploaded.')
    }

    const publicationFile = req.files[PUBLICATION_FILE_UPLOAD_NAME]

    // Verify request inputs for metadata
    const metadata = validatePublicationAssetMetadata(req.body?.metadata)

    // Save to temporary path
    const filePath = await AssetService.storeUploadedFile(
      publicationFile as UploadedFile
    )

    try {
      // Send to NFTService
      const token = await nftService.uploadPublicationPDF(
        filePath,
        metadata as INFTMetadata
      )

      // Store an entry to centralized DB
      const dbEntry = PublicationService.createPublicationEntry({
        ...metadata,
        nftToken: token,
      })

      // Return token
      res.locals.data = { metadata, token, dbEntry }
    } catch (err) {
      throw err
    } finally {
      // Remove temporary file from storage
      AssetService.removeStoredFile(filePath)
      next()
    }
  }
}

export default new PublicationController()
