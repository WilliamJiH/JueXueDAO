import { Asset } from './asset.types'
import { IInstitution } from './publication.types'

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
  assets: Array<Asset>
}
