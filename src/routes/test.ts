import { Router } from 'express'

const router = Router()

router.get('/test', (req, res, next) => {
  const data = {
    testResponse: 'Connected!',
    reqBody: req.body,
    reqParams: req.params,
    reqQuery: req.query,
  }

  res.locals.data = data
  next()
})

router.get('/error', (req, res, next) => {
  throw new Error('Demo error')
})

export default router
