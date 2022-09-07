import { INFTMetadata, INftStorageToken, NftStorageCID } from '@/db/nft-storage'
import { ObjectId } from 'mongoose'
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

export interface IReference {
  url?: string
  nftCID: string
  content: string
}

export interface IPublicationMetadata {
  type: 'blog-post' | 'publication'
  title: string
  abstract?: string
  keywords?: Array<string>
  date?: Date

  authors: Array<IAuthor>
  institution?: IInstitution

  references?: Array<IReference>
}

export interface IPublicationAsset extends IPublicationMetadata {
  nftCID: NftStorageCID
}
