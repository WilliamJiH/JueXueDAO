import {
  NotImplementedError,
  RequirementUnfulfilledException,
} from '@/types/error.types'
import { validateUserInfo } from '@/utils/user.validator'
import { NextFunction, Request, Response } from 'express'

export class UserAccountController {
  async registerScholar(req: Request, res: Response, next: NextFunction) {
    // Get registration info
    const { userInfo } = req.body
    if (!userInfo || typeof userInfo !== 'object')
      throw new RequirementUnfulfilledException('User Information Not Given')

    if (!validateUserInfo(userInfo)) {
    }
    // Create user entry
    // Send review request
    // Return user entry
    // TODO:
    throw new NotImplementedError()
  }

  async getPendingRegistrations(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    // TODO:
    throw new NotImplementedError()
  }

  async confirmScholarRegistration(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    // TODO:
    throw new NotImplementedError()
    // Get scholar
    // Update scholar in db
    // Update DAO contract
    // Return result
  }

  async deleteUserAccount(req: Request, res: Response, next: NextFunction) {
    // TODO:
    throw new NotImplementedError()
    // Get scholar
    // Update scholar in db
    // Check if scholar is in contract
    // Return result
  }
}

export default new UserAccountController()
