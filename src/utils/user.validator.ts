import {
  InvalidValueException,
  RequirementUnfulfilledException,
} from '@/types/error.types'
import { IRegisteredScholar } from '@/types/user.types'
import _ from 'lodash'

/**
 * Validate input data for a scholar user. Set memberStatus to "pending".
 * @param user Input user object.
 * @returns Validated "pending" user object.
 */
export const validateUserInfo = (user: any) => {
  const validateContacts = (contacts: any): boolean =>
    Object.keys(contacts).every(
      (key) =>
        (['email', 'phone', 'address'].includes(key) &&
          typeof contacts[key] === 'string') ||
        (key === 'institution' &&
          typeof contacts.institution?.name === 'string')
    )

  if (!user || typeof user !== 'object')
    throw new RequirementUnfulfilledException('User Information Not Given')
  // Validate field existence
  if (
    // user given fields do not match requirement
    !!_.difference(Object.keys(user), [
      'name',
      'publicKey',
      'description',
      'contacts',
    ]) ||
    !validateContacts(user.contacts)
  )
    throw new InvalidValueException('Invalid fields')

  return { memberStatus: 'pending', ...user } as IRegisteredScholar
}
