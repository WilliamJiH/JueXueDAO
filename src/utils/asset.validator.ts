import { InvalidValueException } from '@/types/error.types'
import { INFTMetadata } from '@/db/nft-storage'
import { IPublicationMetadata } from '@/types/publication.types'

export const validatePublicationMetadata = (metadata?: object | string) => {
  if (!metadata) throw new InvalidValueException('Metadata is not given')

  const validateProperties = (data: object) => {
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

  if (!_metadata || !validateProperties(_metadata as object)) {
    console.log('Invalid metadata (properties): ', { metadata: _metadata })
    throw new InvalidValueException('Metadata is invalid')
  }

  return _metadata
}
