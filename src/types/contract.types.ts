import { NftStorageCID } from '@/db/nft-storage'

export type PublicAddress = string
export type PrivateKey = string
export type ArticleVotingStats = {
  totalVotes: number
  approvalCounts: number
  contractIsClosed: boolean
}

export interface IScholarDaoContract {
  approveNewScholar: (address: PublicAddress) => Promise<void>
  initReviewContract: (
    author: PublicAddress,
    paperUri: NftStorageCID,
    _reviewers: Array<PublicAddress>
  ) => Promise<PublicAddress>
}

export interface IPaperApprovalContract {
  checkVotingStatus: () => Promise<ArticleVotingStats>
  isContractClaimable: () => Promise<boolean>
}
