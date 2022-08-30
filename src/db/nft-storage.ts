// Import the NFTStorage class and File constructor from the 'nft.storage' package
import { NFTStorage, File, TokenType } from 'nft.storage'

// The 'mime' npm package helps us set the correct file type on our File objects
import mime from 'mime'
import configs from '../../configs'
import path from 'path'
import fs from 'fs'
import { PublicationMetadata } from '@src/types/publication.types'

export interface NFTMetadata {
  name: string
  description: string
  properties: PublicationMetadata
}

/**
 * A helper to read a file from a location on disk and return a File object.
 * Note that this reads the entire file into memory and should not be used for
 * very large files.
 * @param {string} filePath the path to a file to store
 * @returns {File} a File object containing the file content
 */
async function getFileFromPath(filePath: string): Promise<File> {
  const content = await fs.promises.readFile(filePath)
  const type = mime.getType(filePath)
  return new File([content], path.basename(filePath), { type })
}

class NftStorage {
  #api: NFTStorage

  constructor(apiKey: string) {
    this.#api = new NFTStorage({ token: apiKey })
  }

  set api(apiKey: string) {
    this.#api = new NFTStorage({ token: apiKey })
  }

  /**
   * Reads a file from `filePath` and stores an NFT with the given name and description.
   * @param {string} filePath the temporary path to an image file
   * @param {string} metadata the metadata for the NFT
   */
  async storeNFT(filePath: string, metadata: NFTMetadata) {
    const image = await getFileFromPath(filePath)

    const nft = {
      image,
      ...metadata,
    }

    // call client.store, passing in the image & metadata
    return this.#api.store(nft)
  }

  async retrieveNFT() {}
}

export default new NftStorage(configs.nftStorageApiKey)
