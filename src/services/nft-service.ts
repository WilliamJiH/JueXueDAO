import NFTStorageAPI, { NFTMetadata } from '@/db/nft-storage'

export class NFTService {
  public async uploadPublicationPDF(filePath: string, metadata: NFTMetadata) {
    const token = await NFTStorageAPI.storeNFT(filePath, metadata)
    return token
  }
}

export default new NFTService()
