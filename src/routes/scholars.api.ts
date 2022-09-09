import userAccountController from '@/controllers/user-account-controller'
import { Router } from 'express'

const router = Router()

router.post('/scholars', userAccountController.registerScholar)
router.put(
  '/scholars/:userId/confirmation',
  userAccountController.confirmScholarRegistration
)
router.get(
  '/scholars/registrations',
  userAccountController.getPendingRegistrations
)
router.delete('/scholars/:userId', userAccountController.deleteUserAccount)

export default router
