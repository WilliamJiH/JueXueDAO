import { ScholarDaoContract, cfx, CfxManager } from '@/db/conflux'
import { Conflux } from 'js-conflux-sdk'
import { PublicAddress } from '@/types/contract.types'
import { IRegisteredScholar } from '@/types/user.types'
import { IArticleAsset } from '@/types/article.types'

export class ScholarDaoContractService {
  static async registerScholarToDAO(
    scholarPublicKey: PublicAddress
  ): Promise<void> {
    return ScholarDaoContract.approveNewScholar(scholarPublicKey)
  }

  static async createReviewRequestContract(article: IArticleAsset) {
    const [primaryAuthor] = article.authors
    const primAuthorAddr = primaryAuthor.publicKey
    const articleCID = article.nftCID
    const reviewers = [CfxManager]

    return ScholarDaoContract.initReviewContract(
      primAuthorAddr,
      articleCID,
      reviewers
    )
  }
}
