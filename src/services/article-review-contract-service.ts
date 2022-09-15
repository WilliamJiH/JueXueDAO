import { ARTICLE_REVIEW_CONTRACT_ABI, cfx } from '@/db/conflux'
import { IPaperApprovalContract, PublicAddress } from '@/types/contract.types'

export default class ArticleReviewContractService {
  #contract: IPaperApprovalContract

  constructor(contractAddress: PublicAddress) {
    this.#contract = cfx.Contract({
      abi: ARTICLE_REVIEW_CONTRACT_ABI,
      address: contractAddress,
    })
  }

  async getReviewStatus() {
    return this.#contract.checkVotingStatus()
  }

  async isApproved() {
    return this.#contract.isContractClaimable()
  }
}
