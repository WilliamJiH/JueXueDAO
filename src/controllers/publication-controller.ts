import nftService, { NFTService } from '@/services/nft-service'
import {
  FileNotUploadedException,
  InvalidIdException,
  InvalidValueException,
  NotImplementedError,
  ResourceNotFoundException,
} from '@/types/error.types'
import { NextFunction, Request, Response } from 'express'
import { validatePublicationAssetMetadata } from '@/utils/asset.validator'
import { UploadedFile } from 'express-fileupload'
import { FileStorageService } from '@/services/fs-service'
import { INFTMetadata } from '@/db/nft-storage'
import { Publication, PublicationModel } from '@/models/publication'
import { PublicationService } from '@/services/publication-service'
import { ObjectId } from 'mongoose'

const PUBLICATION_FILE_UPLOAD_NAME = 'publicationFile'

export class PublicationController {
  async getAllPublications(req: Request, res: Response, next: NextFunction) {
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

  async getPublicationByEntryId(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { entryId } = req.params

    const publication = await PublicationService.getPublicationEntryById(
      entryId as unknown as ObjectId
    )

    res.locals.data = { publication }
    next()
  }

  async getPublicationByCID(req: Request, res: Response, next: NextFunction) {
    const { cid } = req.params

    const publication = await PublicationService.getPublicationEntryByCID(cid)

    res.locals.data = { publication }
    next()
  }

  async getPublicationsByAuthorPublicKey(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { authorPublicKey } = req.params
    const publications =
      await PublicationService.getPublicationEntriesByAuthorPublicKey(
        authorPublicKey
      )

    res.locals.data = { publications }
    next()
  }

  /**
   * Check the publication asset status in NFTStorage.
   */
  async getPublicationNFTStatus(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { entryId } = req.params

    const publication = await PublicationService.getPublicationEntryById(
      entryId as unknown as ObjectId
    )

    if (!publication.nftCID)
      throw new ResourceNotFoundException(
        'Publication does not have NFT resource',
        404
      )

    // Get nft status from storage
    try {
      const { result: checkResult } = await nftService.checkNFT(
        publication.nftCID
      )
      res.locals.data = { checkResult }
    } catch (e: any) {
      console.log(e)
      throw new ResourceNotFoundException('NFT Not Found')
    }

    // try {
    //   const { status } = await nftService.checkNFTStatus(cid)
    //   res.locals.data.status = status
    // } catch (e: any) {
    //   console.log(e)
    //   throw new ResourceNotFoundException('Cannot Access NFT')
    // }

    next()
  }

  /**
   * Check publication status under ReviewContract.
   */
  async getPublicationReviewStatus(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { entryId } = req.params

    // Get Publication review status from DB
    const publication = await PublicationService.getPublicationEntryById(
      entryId as unknown as ObjectId
    )

    // TODO:
    throw new NotImplementedError()
    // if DB shows pending
    // Get Publication review status from Contract
    // Update Publication review status in DB

    // if DB has status result
    // Return result

    next()
  }

  /**
   * Create a publication NFT in NFTStorage.
   */
  async createPublicationNFT(req: Request, res: Response, next: NextFunction) {
    // Get pdf file path
    if (!req.files || !req.files[PUBLICATION_FILE_UPLOAD_NAME]) {
      throw new FileNotUploadedException('No files were uploaded.')
    }

    const publicationFile = req.files[PUBLICATION_FILE_UPLOAD_NAME]

    // Verify request inputs for metadata
    const metadata = validatePublicationAssetMetadata(req.body?.metadata)

    // Save to temporary path
    const filePath = await FileStorageService.storeUploadedFile(
      publicationFile as UploadedFile
    )

    try {
      // Send to IPFS
      const nftCID = await nftService.uploadPublicationPDF(filePath)

      // Store an entry to centralized DB
      const dbEntry = await PublicationService.createPublicationEntry({
        ...metadata,
        nftCID,
      })

      // TODO: Send review request to Contract

      // Return token
      res.locals.data = { nftCID, publicationData: dbEntry }
    } catch (err) {
      throw err
    } finally {
      // Remove temporary file from storage
      FileStorageService.removeStoredFile(filePath)
      next()
    }
  }

  async updatePublicationMetadata(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { entryId } = req.params
    // TODO:
    throw new NotImplementedError()
    next()
  }

  async deletePublicationNFTByEntryID(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { entryId } = req.params
    // TODO:
    throw new NotImplementedError()
    next()
  }

  async deletePublicationNFTByCID(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { cid } = req.params

    const publication = await PublicationService.getPublicationEntryByCID(cid)

    // TODO:
    throw new NotImplementedError()
  }
}

export default new PublicationController()
