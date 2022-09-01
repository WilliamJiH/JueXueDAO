import NFTStorageAPI, { INFTMetadata, INftStorageToken } from '@/db/nft-storage'

export class NFTService {
  public async uploadPublicationPDF(filePath: string, metadata: INFTMetadata) {
    const token: INftStorageToken = await NFTStorageAPI.storeNFT(
      filePath,
      metadata
    )
    return token
  }
}

export default new NFTService()
