import { NftStorageCID } from '@/db/nft-storage'
import { Publication } from '@/models/publication'
import {
  InvalidIdException,
  ResourceNotFoundException,
} from '@/types/error.types'
import { IPublicationAsset } from '@/types/publication.types'
import { isValidObjectId, ObjectId } from 'mongoose'

const PER_PAGE = 20
export class PublicationService {
  static async getPublicationEntryById(id: ObjectId) {
    if (!isValidObjectId(id))
      throw new InvalidIdException('Given id is invalid')

    const result = await Publication.findById(id)
    if (!result) throw new ResourceNotFoundException('Publication not Found')

    return result
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

  static async getPublicationEntriesByAuthorName(name: string) {
    return Publication.find({
      'properties.authors': { $elemMatch: { name } },
    })
  }

  static async getPublicationEntriesByAuthorPublicKey(publicKey: string) {
    return Publication.find({
      'properties.authors': { $elemMatch: { publicKey } },
    })
  }

  static async getPublicationEntryByCID(cid: NftStorageCID) {
    const result = await Publication.findOne({ 'nftToken.ipnft': cid })
    if (!result) throw new ResourceNotFoundException('Publication not Found')

    return result
  }

  static async createPublicationEntry(data: IPublicationAsset) {
    return Publication.create(data)
  }
}

export default new PublicationService()
