const express = require('express')
const router = express.Router()

router.get('/test', (req, res, next) => {
  const data = {
    testResponse: 'Connected!',
    reqBody: req.body,
    reqParams: req.params,
    reqQuery: req.query,
  }

  res.data = data
  next()
})

router.get('/error', (req, res, next) => {
  throw new Error('Demo error')
})

module.exports = router
