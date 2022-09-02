import { InvalidValueException } from '@/types/error.types'
import { INFTMetadata } from '@/db/nft-storage'
import { IPublicationMetadata } from '@/types/publication.types'

/**
 * Check if an object satisfies the required parameters of NFTStorage
 * @param metadata
 * @returns
 */
const validateNftStorageAsset = (metadata: object) => {
  return (
    'name' in metadata &&
    typeof (metadata as any).name === 'string' &&
    'description' in metadata &&
    typeof (metadata as any).description === 'string' &&
    (!('properties' in metadata) ||
      typeof (metadata as any).properties === 'object')
  )
}

/**
 * Check if the given data satisfies the required properties of IPublicationAsset.
 * @param metadata
 * @returns A validated PublicationAsset object without nftToken.
 */
export const validatePublicationAssetMetadata = (
  metadata?: object | string
): INFTMetadata => {
  if (!metadata) throw new InvalidValueException('Metadata is not given')

  const validateProperties = (data: IPublicationMetadata) => {
    return true
  }

  let _metadata = metadata

  try {
    // Metadata accepts string or object
    _metadata =
      typeof _metadata === 'object' ? _metadata : JSON.parse(_metadata)
  } catch (err) {
    console.log('Invalid metadata (format): ', { metadata: _metadata })
    throw new InvalidValueException('Metadata has invalid format')
  }

  if (
    !validateNftStorageAsset(_metadata as object) || // Satisfies NftStorage's definition of NFTMetadata
    !validateProperties((_metadata as INFTMetadata).properties) // Satisfies Properties for a Publication
  ) {
    console.log('Invalid metadata (properties): ', { metadata: _metadata })
    throw new InvalidValueException('Metadata is invalid')
  }

  return _metadata as INFTMetadata
}
