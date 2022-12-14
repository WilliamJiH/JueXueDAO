import { Asset } from './asset.types'
import { IInstitution } from './article.types'
import { PublicAddress } from './contract.types'

export type memberStatus = 'pending' | 'rejected' | 'registered'
// | 'quitted'
// | 'blocked'

export interface IUser {
  name: string
  publicKey: PublicAddress
}

export interface IContacts {
  email?: string
  phone?: string
  address?: string
  institution?: IInstitution
}

export interface IRegisteredScholar extends IUser {
  description?: string
  contacts?: IContacts
  memberStatus: memberStatus
  // assets: Array<Asset>
}
