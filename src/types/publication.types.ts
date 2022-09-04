import { INFTMetadata, INftStorageToken } from '@/db/nft-storage'
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
  entryId?: ObjectId
}

export interface IInstitution {
  name: string
}

export interface IReference {
  url: string
  ipnft: string // cid
  entryId?: ObjectId
  content: string
}

export interface IPublicationMetadata {
  type: 'blog-post' | 'publication'
  authors: Array<IAuthor>
  keywords?: Array<string>
  abstract?: string
  date?: Date
  institution?: IInstitution
  references?: Array<IReference>
}

export interface IPublicationAsset extends INFTMetadata {
  properties: IPublicationMetadata
  nftToken: INftStorageToken
}
