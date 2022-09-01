// Import the NFTStorage class and File constructor from the 'nft.storage' package
import { NFTStorage, File, TokenType } from 'nft.storage'

// The 'mime' npm package helps us set the correct file type on our File objects
import mime from 'mime'
import configs from '@configs'
import path from 'path'
import fs from 'fs'
import { IPublicationMetadata } from '../types/publication.types'

export type NFTProperties = IPublicationMetadata

export interface INftStorageToken {
  ipnft: string
  url: string
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
    const type = mime.getType(filePath)
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

    // call client.store, passing in the image & metadata
    return this.#api.store(nft)
  }

  async retrieveNFT() {}
}

const NFTStorageAPI = new NftStorage(configs.nftStorageApiKey)
export default NFTStorageAPI
