import { INFTMetadata, INftStorageToken, NftStorageCID } from '@/db/nft-storage'
import { ObjectId } from 'mongoose'
import { ArticleVotingStats, PublicAddress } from './contract.types'
import { IContacts } from './user.types'

export type ReviewStatus = 'approved' | 'rejected' | 'pending'
/**
 * An Author differentiates from a User as an author may not be
 * a user of the DAO app.
 */
export interface IAuthor {
  name: string
  publicKey?: PublicAddress
  contacts?: IContacts
}

export interface IInstitution {
  name: string
}

export interface IReference {
  url?: string
  nftCID: NftStorageCID
  content: string
}

export interface IArticleMetadata {
  type: 'blog-post' | 'article'
  title: string
  abstract?: string
  keywords?: Array<string>
  date?: Date

  authors: Array<IAuthor>
  institution?: IInstitution

  references?: Array<IReference>
}

export interface IArticleAsset extends IArticleMetadata {
  nftCID: NftStorageCID
  reviewContractAddress?: PublicAddress
  reviewStatus?: ReviewStatus
  votingStats?: ArticleVotingStats
}
