import { NftStorageCID } from '@/db/nft-storage'
import { Article } from '@/models/article'
import {
  InvalidIdException,
  InvalidValueException,
  ResourceNotFoundException,
} from '@/types/error.types'
import { IArticleAsset, ReviewStatus } from '@/types/article.types'
import { isValidObjectId, ObjectId } from 'mongoose'
import { PER_PAGE } from '@/constants/query.constants'
import { ScholarDaoContractService } from './scholar-dao-contract-service'
import { ArticleVotingStats } from '@/types/contract.types'

export class ArticleService {
  static async getArticleEntryById(id: ObjectId | string) {
    if (!isValidObjectId(id))
      throw new InvalidIdException(`Given id ${id} is invalid`)

    const result = await Article.findById(id)
    if (!result) throw new ResourceNotFoundException('Article not Found')

    return result
  }

  static async getArticleEntries({
    searchText,
    page,
  }: {
    searchText?: string
    page: number
  }) {
    return Article.find(
      searchText
        ? {
            $text: {
              $search: searchText,
              $caseSensitive: false,
              $diacriticSensitive: false,
            },
          }
        : {}
    )
      .limit(PER_PAGE)
      .skip(PER_PAGE * page)
  }

  static async getArticleEntriesByAuthorName({
    authorName,
    page,
  }: {
    authorName: string
    page: number
  }) {
    return Article.find({
      authors: { $elemMatch: { name: authorName } },
    })
      .limit(PER_PAGE)
      .skip(PER_PAGE * page)
  }

  static async getArticleEntriesByAuthorPublicKey({
    authorPublicKey,
    page,
  }: {
    authorPublicKey: string
    page: number
  }) {
    return Article.find({
      authors: { $elemMatch: { publicKey: authorPublicKey } },
    })
      .limit(PER_PAGE)
      .skip(PER_PAGE * page)
  }

  static async getArticleEntryByCID(cid: NftStorageCID) {
    const result = await Article.findOne({ nftCID: cid })
    if (!result) throw new ResourceNotFoundException('Article not Found')

    return result
  }

  static async createArticleEntry(data: IArticleAsset) {
    // FIXME:
    // When a article comes in,
    // 1) Search for authors - DONE
    // 2) Search for references
    const reviewContractAddress =
      await ScholarDaoContractService.createReviewRequestContract(data)

    const article = await Article.create({ ...data, reviewContractAddress })

    return article
  }

  static async deleteArticleEntry(id: ObjectId | string) {
    if (!isValidObjectId(id))
      throw new InvalidIdException(`Given id ${id} is invalid`)

    const result = await Article.findByIdAndDelete(id)
    if (!result) throw new ResourceNotFoundException('Article not Found')

    return result
  }

  static async updateArticleReview({
    id,
    votingStats,
    reviewStatus,
  }: {
    id: ObjectId | string
    votingStats: ArticleVotingStats
    reviewStatus: ReviewStatus
  }) {
    if (!isValidObjectId(id))
      throw new InvalidIdException(`Given id ${id} is invalid`)

    return Article.updateOne({ _id: id }, { votingStats, reviewStatus })
  }

  /**
   * Find articles whose references include the article with the cid.
   * @param cid
   */
  static async getCitingArticlesByCID(cid: NftStorageCID) {
    return Article.find({ references: { $elemMatch: { nftCID: cid } } })
  }

  /**
   * Find articles whose references include the article with the title.
   * @param title
   */
  static async getCitingArticlesByTitle(title: string) {
    // FIXME: not tested
    return Article.find({
      references: {
        $text: {
          $search: title,
          $caseSensitive: false,
          $diacriticSensitive: false,
        },
      },
    })
  }
}

export default new ArticleService()
