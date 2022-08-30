import nftService from '../services/nft-service'
import { FileNotUploadedException } from '../types/error.types'
import { NextFunction, Request, Response } from 'express'

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
    if (!req.files) {
      throw new FileNotUploadedException('No files were uploaded.', 400)
    }

    // Verify request inputs for metadata
    // Send to NFTService
    // Return token
  }
}

export default new AssetController()
