import nftService from '@/services/nft-service'
import {
  FileNotUploadedException,
  InvalidValueException,
} from '@/types/error.types'
import { NextFunction, Request, Response } from 'express'
import { validatePublicationMetadata } from '@/utils/asset.validator'
import { UploadedFile } from 'express-fileupload'
import assetService from '@/services/asset-service'

const PUBLICATION_FILE_UPLOAD_NAME = 'publicationFile'

export class PublicationController {
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
    const { metadata } = req.body?.metadata
      ? JSON.parse(req.body.metadata)
      : null
    if (!metadata || !validatePublicationMetadata(metadata)) {
      throw new InvalidValueException('Metadata is invalid')
    }

    // Save to temporary path
    const filePath = await assetService.storeUploadedFile(
      publicationFile as UploadedFile
    )

    console.log({ filePath })
    // Send to NFTService

    // const token = await nftService.uploadPublicationPDF(filePath, metadata)
    // Store to registry DB

    // Return token
    res.locals.data = metadata
    next()
  }
}

export default new PublicationController()
