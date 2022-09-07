import NFTStorageAPI, {
  INFTMetadata,
  INftStorageToken,
  NftStorageCID,
} from '@/db/nft-storage'

export class NFTService {
  public async uploadPublicationPDF(
    filePath: string,
    metadata: INFTMetadata
  ): Promise<NftStorageCID> {
    return NFTStorageAPI.storeNFT(filePath, metadata)
  }

  /**
   * Removes stored content by its CID from the service.
   * Please note that even if content is removed from the service other nodes that have replicated it might still continue providing it.
   */
  public async deleteNFT(cid: NftStorageCID) {
    return NFTStorageAPI.deleteNFT(cid)
  }

  /**
   * Returns current status of the stored NFT by its CID.
   * Note the NFT must have previously been stored by this account.
   */
  public async checkNFTStatus(cid: NftStorageCID) {
    return NFTStorageAPI.checkNFTStatus(cid)
  }

  /**
   * Check if a CID of an NFT is being stored by nft.storage. Throws if the NFT was not found.
   */
  public async checkNFT(cid: NftStorageCID) {
    return NFTStorageAPI.checkNFT(cid)
  }
}

export default new NFTService()
