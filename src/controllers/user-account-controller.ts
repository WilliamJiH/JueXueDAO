import { UserAccountService } from '@/services/user-account-service'
import {
  InvalidValueException,
  NotImplementedError,
  RequirementUnfulfilledException,
} from '@/types/error.types'
import { validateUserInfo } from '@/utils/user.validator'
import { NextFunction, Request, Response } from 'express'

export class UserAccountController {
  async registerScholar(req: Request, res: Response, next: NextFunction) {
    // Get registration info
    const userInfo = validateUserInfo(req.body?.userInfo)

    // Create user entry
    const scholar = await UserAccountService.createScholarAccount(userInfo)
    // TODOLATER: Send review request

    // Return user entry
    res.locals.data = { scholar }
    next()
  }

  async getPendingRegistrations(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const page = Number(req.query.page) || 0

    const scholars = await UserAccountService.getScholarsByMemberStatus({
      page,
      memberStatus: 'pending',
    })

    res.locals.data = { scholars }
    next()
  }

  async confirmScholarRegistration(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    // Get scholar
    const { userId } = req.params

    // Update scholar in db
    const scholar = await UserAccountService.confirmScholarRegistration(userId)

    // TODO: Update DAO contract - in service

    res.locals.data = { scholar }
    next()
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
