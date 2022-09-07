// Import the NFTStorage class and File constructor from the 'nft.storage' package
import { NFTStorage, File } from 'nft.storage'

// The 'mime' npm package helps us set the correct file type on our File objects
import mime from 'mime'
import configs from '@configs'
import path from 'path'
import fs from 'fs'
import { IPublicationMetadata } from '../types/publication.types'
import { CheckResult } from 'nft.storage/dist/src/lib/interface'

export type NftStorageCID = string
export type NftStorageURL = string

export type NFTProperties = IPublicationMetadata

export interface INftStorageToken {
  ipnft: NftStorageCID
  url: NftStorageURL
}

export interface INFTMetadata {
  name: string
  description: string
  properties: NFTProperties
}

export class NftStorage {
  #api: NFTStorage

  constructor(apiKey: string) {
    this.#api = new NFTStorage({ token: apiKey })
  }

  set apiKey(apiKey: string) {
    this.#api = new NFTStorage({ token: apiKey })
  }

  /**
   * A helper to read a file from a location on disk and return a File object.
   * Note that this reads the entire file into memory and should not be used for
   * very large files.
   * @param {string} filePath the path to a file to store
   * @returns {File} a File object containing the file content
   */
  static async getFileFromPath(filePath: string): Promise<File> {
    const content = await fs.promises.readFile(filePath)
    fs.writeFileSync(path.join(path.dirname(filePath), 'tempout.pdf'), content)
    const type = mime.getType(filePath)
    console.log(`🧲 Extracted file type ${type}`)
    return new File([content], path.basename(filePath), { type })
  }

  /**
   * Reads a file from `filePath` and stores an NFT with the given name and description.
   * @param {string} filePath the temporary path to an image file
   * @param {string} metadata the metadata for the NFT
   */
  async storeNFT(filePath: string, metadata: INFTMetadata) {
    const image = await NftStorage.getFileFromPath(filePath)

    const nft = {
      image,
      ...metadata,
    }

    console.log({ image })

    // call client.store, passing in the image & metadata
    const token = configs.useNftStorage
      ? await this.#api.storeBlob(image) //await this.#api.store(nft)
      : configs.demoNftCID
    //  {
    //     ipnft: configs.demoNftCID,
    //     url: configs.demoNftURL,
    //   }

    return token
  }

  /**
   * Check if a CID of an NFT is being stored by nft.storage. Throws if the NFT was not found.
   * @param cid CID of the NFT.
   * @returns
   * @throws NotFound error from nft.storage.
   */
  async checkNFT(cid: NftStorageCID): Promise<
    | {
        result: CheckResult | null
      }
    | never
  > {
    const result = await this.#api.check(cid)
    return { result }
  }

  /**
   * Returns current status of the stored NFT by its CID. Note the NFT must have previously been stored by this account.
   * @param cid CID of the NFT.
   * @returns
   */
  async checkNFTStatus(cid: NftStorageCID) {
    const status = await this.#api.status(cid)
    return { status }
  }

  async deleteNFT(cid: NftStorageCID) {
    return this.#api.delete(cid)
  }

  async retrieveNFT(ipurl: NftStorageURL) {}
}

const NFTStorageAPI = new NftStorage(configs.nftStorageApiKey)
export default NFTStorageAPI
