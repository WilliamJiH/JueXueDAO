import nftService from '@/services/nft-service'
import {
  FileNotUploadedException,
  InvalidValueException,
} from '@/types/error.types'
import { NextFunction, Request, Response } from 'express'
import { validatePublicationMetadata } from '@/utils/asset.validator'
import { UploadedFile } from 'express-fileupload'
import assetService, { AssetService } from '@/services/asset-service'
import { NFTMetadata } from '@/db/nft-storage'
import { Publication, PublicationModel } from '@/models/publication'
import configs from '@configs'

const PUBLICATION_FILE_UPLOAD_NAME = 'publicationFile'

export class PublicationController {
  async getPublicationNFTStatus(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    next()
  }

  async getAllPublicationNFTs(req: Request, res: Response, next: NextFunction) {
    // Get query
    const { query } = req
    // Fetch
    res.locals.data = req
    next()
  }

  async getPublicationNFT(req: Request, res: Response, next: NextFunction) {
    // Get identifier from param
    const { params } = req
    res.locals.data = req
    next()
  }

  async createPublicationNFT(req: Request, res: Response, next: NextFunction) {
    // Get pdf file path
    if (!req.files || !req.files[PUBLICATION_FILE_UPLOAD_NAME]) {
      throw new FileNotUploadedException('No files were uploaded.')
    }

    const publicationFile = req.files[PUBLICATION_FILE_UPLOAD_NAME]

    // Verify request inputs for metadata
    let { metadata } = req.body
    metadata = validatePublicationMetadata(metadata)

    // Save to temporary path
    const filePath = await AssetService.storeUploadedFile(
      publicationFile as UploadedFile
    )

    try {
      // Send to NFTService
      const token = configs.useNftStorage
        ? await nftService.uploadPublicationPDF(
            filePath,
            metadata as NFTMetadata
          )
        : {
            ipnft: configs.demoNftCID,
            url: configs.demoNftURL,
          }

      // Store an entry to centralized DB
      const publicationData: PublicationModel = { ...metadata, nftToken: token }
      const databaseEntry = await Publication.create(publicationData)

      // Return token
      res.locals.data = { metadata, token, databaseEntry }
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
