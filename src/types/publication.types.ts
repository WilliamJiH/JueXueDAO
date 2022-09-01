import { INFTMetadata, INftStorageToken } from '@/db/nft-storage'
import { IContacts } from './user.types'
/**
 * An Author differentiates from a User as an author may not be
 * a user of the DAO app.
 */
export interface IAuthor {
  name: string
  publicKey?: string
  contacts?: IContacts
}

export interface IInstitution {
  name: string
}

export interface IPublicationMetadata {
  type: 'blog-post' | 'publication'
  authors: Array<IAuthor>
  keywords?: Array<string>
  abstract?: string
  date?: Date
  institution?: IInstitution
}

export interface IPublicationAsset extends INFTMetadata {
  properties: IPublicationMetadata
  nftToken: INftStorageToken
}
