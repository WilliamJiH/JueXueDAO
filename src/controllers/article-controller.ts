import nftService, { NFTService } from '@/services/nft-service'
import {
  FileNotUploadedException,
  NotImplementedError,
  ResourceNotFoundException,
} from '@/types/error.types'
import { NextFunction, Request, Response } from 'express'
import { validateArticleAssetMetadata } from '@/utils/asset.validator'
import { UploadedFile } from 'express-fileupload'
import { FileStorageService } from '@/services/fs-service'
import { NftStorageCID } from '@/db/nft-storage'
import { ArticleService } from '@/services/article-service'
import { IArticleAsset, ReviewStatus } from '@/types/article.types'
import { ARTICLE_FILE_UPLOAD_NAME } from '@/constants/api.constants'
import ArticleReviewContractService from '@/services/article-review-contract-service'

export class ArticleController {
  async getAllArticles(req: Request, res: Response, next: NextFunction) {
    const page = Number(req.query.page) || 0

    const { searchText, cid, authorName, authorPublicKey } = req.query

    let data: IArticleAsset[]

    if (cid) {
      data = [await ArticleService.getArticleEntryByCID(cid as NftStorageCID)]
    } else if (authorName) {
      data = await ArticleService.getArticleEntriesByAuthorName({
        authorName: authorName as string,
        page,
      })
    } else if (authorPublicKey) {
      data = await ArticleService.getArticleEntriesByAuthorPublicKey({
        authorPublicKey: authorPublicKey as string,
        page,
      })
    } else {
      // Full text search
      data = await ArticleService.getArticleEntries({
        searchText: !!searchText && String(searchText),
        page,
      })
    }

    res.locals.data = { searchResult: data }
    next()
  }

  async getArticleByEntryId(req: Request, res: Response, next: NextFunction) {
    const { entryId } = req.params

    const article = await ArticleService.getArticleEntryById(entryId as string)

    res.locals.data = { article }
    next()
  }

  /**
   * Check the article asset status in NFTStorage.
   */
  async getArticleNFTStatus(req: Request, res: Response, next: NextFunction) {
    const { entryId } = req.params

    const article = await ArticleService.getArticleEntryById(entryId as string)

    if (!article.nftCID)
      throw new ResourceNotFoundException(
        'Article does not have NFT resource',
        404
      )

    // Get nft status from storage
    try {
      const { result: checkResult } = await nftService.checkNFT(article.nftCID)
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

  async deleteArticleNFTByEntryID(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { entryId } = req.params

    const article = await ArticleService.deleteArticleEntry(entryId as string)

    if (article.nftCID) nftService.deleteNFT(article.nftCID)

    res.locals.data = { article }
    next()
  }

  /**
   * Check article status under ReviewContract.
   */
  async getArticleReviewStatus(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { entryId } = req.params

    // Get Article review status from DB
    const article = await ArticleService.getArticleEntryById(entryId as string)

    // if DB has status result
    // Return result
    if (article.reviewStatus !== 'pending') {
      res.locals.data = {
        reviewStatus: article.reviewStatus,
        votingStats: article.votingStats,
        reviewContractAddress: article.reviewContractAddress,
      }
      next()
    }

    // if DB shows pending
    // Get Article review status from Contract
    const reviewContractService = new ArticleReviewContractService(
      article.reviewContractAddress
    )
    const votingStats = await reviewContractService.getReviewStatus()

    // Update Article review status in DB
    let newStatus: ReviewStatus = 'pending'

    if (votingStats.contractIsClosed) {
      const isApproved = await reviewContractService.isApproved()
      newStatus = isApproved ? 'approved' : 'rejected'
    }

    ArticleService.updateArticleReview({
      id: entryId as string,
      reviewStatus: newStatus,
      votingStats,
    })

    res.locals.data = {
      reviewStatus: newStatus,
      votingStats,
      reviewContractAddress: article.reviewContractAddress,
    }
    next()
  }

  /**
   * Create a article NFT in NFTStorage.
   */
  async createArticleNFT(req: Request, res: Response, next: NextFunction) {
    // Get pdf file path
    if (!req.files || !req.files[ARTICLE_FILE_UPLOAD_NAME]) {
      throw new FileNotUploadedException('No files were uploaded.')
    }

    const articleFile = req.files[ARTICLE_FILE_UPLOAD_NAME]

    // Verify request inputs for metadata
    const metadata = validateArticleAssetMetadata(req.body?.metadata)

    // Save to temporary path
    const filePath = await FileStorageService.storeUploadedFile(
      articleFile as UploadedFile
    )

    try {
      // Send to IPFS
      const nftCID = await nftService.uploadArticlePDF(filePath)

      // Store an entry to centralized DB and create a PaperApprovalContract
      const dbEntry = await ArticleService.createArticleEntry({
        ...metadata,
        nftCID,
      })

      // Return token
      res.locals.data = { nftCID, articleData: dbEntry }
    } catch (err) {
      throw err
    } finally {
      // Remove temporary file from storage
      FileStorageService.removeStoredFile(filePath)
      next()
    }
  }

  async updateArticleMetadata(req: Request, res: Response, next: NextFunction) {
    const { entryId } = req.params
    // TODO:
    throw new NotImplementedError()
    next()
  }
}

export default new ArticleController()
