import { ServerError } from '@/types/error.types'
import { Router } from 'express'
import 'express-async-errors'

const router = Router()

router.get('/test', async (req, res, next) => {
  const data = {
    testResponse: 'Connected!',
    reqBody: req.body,
    reqParams: req.params,
    reqQuery: req.query,
  }

  res.locals.data = data
  next()
})

router.get('/error', async (req, res, next) => {
  throw new ServerError('Demo throwing error')
})

export default router
