import { ARTICLE_REVIEW_CONTRACT_ABI, cfx } from '@/db/conflux'
import {
  ArticleVotingStats,
  IPaperApprovalContract,
  PublicAddress,
} from '@/types/contract.types'

export default class ArticleReviewContractService {
  #contract: IPaperApprovalContract

  constructor(contractAddress: PublicAddress) {
    this.#contract = cfx.Contract({
      abi: ARTICLE_REVIEW_CONTRACT_ABI,
      address: contractAddress,
    })
  }

  async getReviewStatus() {
    const [totalVotes, approvalCounts, contractIsClosed] =
      await this.#contract.checkVotingStatus()
    return {
      totalVotes,
      approvalCounts,
      contractIsClosed,
    } as ArticleVotingStats
  }

  async isApproved() {
    return this.#contract.isContractClaimable()
  }
}
