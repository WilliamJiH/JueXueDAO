import nftService from '@/services/nft-service'
import {
  FileNotUploadedException,
  InvalidValueException,
} from '@/types/error.types'
import { NextFunction, Request, Response } from 'express'
import { validatePublicationMetadata } from '@/utils/asset.validator'

const ASSET_FILE_PATH = '/temp_files/'

class AssetController {
  async getAllArticleNFT(req: Request, res: Response, next: NextFunction) {
    // Get query
    const { query } = req
    // Fetch
  }

  async getAssetNFT(req: Request, res: Response, next: NextFunction) {
    // Get identifier from param
    const { params } = req
  }

  async createAssetNFT(req: Request, res: Response, next: NextFunction) {
    // Get pdf file path
    if (!req.files && req.files.assetFile) {
      throw new FileNotUploadedException('No files were uploaded.', 400)
    }

    const { assetFile } = req.files
    console.log({ assetFile })
    // const filePath = __dirname + ASSET_FILE_PATH + assetFile

    // Verify request inputs for metadata
    if (!validatePublicationMetadata(req.body?.metadata)) {
      throw new InvalidValueException('Metadata is invalid')
    }
    // Send to NFTService

    // const token = await nftService.uploadPublicationPDF()
    // Return token
  }
}

export default new AssetController()
