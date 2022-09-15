import { PER_PAGE } from '@/constants/query.constants'
import { Scholar } from '@/models/user'
import {
  InvalidIdException,
  InvalidRequestException,
  ResourceNotFoundException,
} from '@/types/error.types'
import { IRegisteredScholar, memberStatus } from '@/types/user.types'
import { isValidObjectId, ObjectId } from 'mongoose'
import { ScholarDaoContractService } from './scholar-dao-contract-service'

export class UserAccountService {
  static async createScholarAccount(data: IRegisteredScholar) {
    return Scholar.create(data)
  }

  static async getScholars({
    page,
    searchText,
  }: {
    page: number
    searchText: string
  }) {
    return Scholar.find(
      searchText
        ? {
            $text: {
              $search: searchText,
              $caseSensitive: false,
              $diacriticSensitive: false,
            },
          }
        : {}
    )
      .limit(PER_PAGE)
      .skip(PER_PAGE * page)
  }

  static async getScholarsByMemberStatus({
    page,
    memberStatus,
  }: {
    page: number
    memberStatus: memberStatus
  }) {
    return Scholar.find({ memberStatus })
      .limit(PER_PAGE)
      .skip(PER_PAGE * page)
  }

  static async getScholarById(id: ObjectId | string) {
    if (!isValidObjectId(id))
      throw new InvalidIdException(`Given id ${id} is invalid`)

    const result = await Scholar.findById(id)
    if (!result) throw new ResourceNotFoundException('Scholar not Found')

    return result
  }

  static async getScholarByPublicKey(publicKey: string) {
    return Scholar.find({ publicKey })
  }

  static async confirmScholarRegistration(id: ObjectId | string) {
    if (!isValidObjectId(id))
      throw new InvalidIdException(`Given id ${id} is invalid`)

    const currScholar = await Scholar.findById(id)
    if (currScholar.memberStatus === 'registered') {
      throw new InvalidRequestException('User already registered')
    }

    // Send to Contract
    await ScholarDaoContractService.registerScholarToDAO(currScholar.publicKey)

    const result = await Scholar.updateOne(
      { _id: id },
      { memberStatus: 'registered' }
    )
    if (!result) throw new ResourceNotFoundException('Scholar not Found')

    return result
  }

  static async deleteScholar(id: ObjectId | string) {
    if (!isValidObjectId(id))
      throw new InvalidIdException(`Given id ${id} is invalid`)

    const result = await Scholar.findByIdAndDelete(id)
    if (!result) throw new ResourceNotFoundException('Scholar not Found')

    return result
  }
}

export default new UserAccountService()
