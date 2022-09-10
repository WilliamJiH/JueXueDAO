import { Request, Response, NextFunction } from 'express'
import {
  AppCustomError,
  ServerError,
  ServerException,
} from '@/types/error.types'
import { WebResponse } from '@/types/web.types'

const BAD_REQUEST_ERROR_STATUS_CODE = 400
const INTERNAL_SERVER_ERROR_STATUS_CODE = 500
const OK_STATUS_CODE = 200

export const errorHandler = (
  err: Error | ServerError | ServerException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(`🪲 Caught Error: ${err.name}`)

  if (err instanceof ServerException) {
    console.warn(err)
    res.locals.statusCode =
      res.locals.statusCode || err.statusCode || BAD_REQUEST_ERROR_STATUS_CODE
    res.locals.msg = err.message
  } else if (err instanceof ServerError) {
    console.warn(err)
    res.locals.statusCode = err.statusCode || INTERNAL_SERVER_ERROR_STATUS_CODE
    res.locals.msg = 'Connection error, please try again later'
  } else {
    console.error(err)
    res.locals.statusCode = INTERNAL_SERVER_ERROR_STATUS_CODE
    res.locals.msg = 'Server undergoing maintenance, please try again later'
  }

  next()

  // res.status(res.locals.statusCode).send({ data: res.locals.data })
  // const statusCode = res.locals.statusCode || OK_STATUS_CODE
  // const response = new WebResponse(res.locals.data || null, res.locals.msg)

  // res.status(statusCode).send(response)
}
