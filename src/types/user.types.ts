import { Asset } from './asset.types'
import { IInstitution } from './article.types'

type memberStatus =
  | 'pending'
  | 'rejected'
  | 'registered'
  | 'quitted'
  | 'blocked'

export interface IUser {
  name: string
  publicKey: string
}

export interface IContacts {
  email?: string
  phone?: string
  address?: string
  institution?: IInstitution
}

export interface IRegisteredScholar extends IUser {
  contacts: IContacts
  memberStatus: memberStatus
  // assets: Array<Asset>
}
