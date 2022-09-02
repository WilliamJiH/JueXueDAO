import { NftStorageCID } from '@/db/nft-storage'
import { Publication } from '@/models/publication'
import { IPublicationAsset } from '@/types/publication.types'
import { ObjectId } from 'mongoose'

export class PublicationService {
  static async getPublicationEntryById(id: ObjectId) {
    return Publication.findById(id)
  }

  static async getPublicationEntryByCID(cid: NftStorageCID) {
    return Publication.findOne({ 'nftToken.ipnft': cid })
  }

  static async createPublicationEntry(data: IPublicationAsset) {
    return Publication.create(data)
  }
}

export default new PublicationService()
