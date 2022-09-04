import { NftStorageCID } from '@/db/nft-storage'
import { Publication } from '@/models/publication'
import { IPublicationAsset } from '@/types/publication.types'
import { ObjectId } from 'mongoose'

const PER_PAGE = 20
export class PublicationService {
  static async getPublicationEntryById(id: ObjectId) {
    return Publication.findById(id)
  }

  static async getPublicationEntries({
    searchText,
    page,
  }: {
    searchText?: string
    page: number
  }) {
    return Publication.find(
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

  static async getPublicationEntryByAuthorName(name: string) {
    return Publication.find({ 'properties.authors': { $elemMatch: { name } } })
  }

  static async getPublicationEntryByAuthorPublicKey(publicKey: string) {
    return Publication.find({
      'properties.authors': { $elemMatch: { publicKey } },
    })
  }

  static async getPublicationEntryByCID(cid: NftStorageCID) {
    return Publication.findOne({ 'nftToken.ipnft': cid })
  }

  static async createPublicationEntry(data: IPublicationAsset) {
    return Publication.create(data)
  }
}

export default new PublicationService()
