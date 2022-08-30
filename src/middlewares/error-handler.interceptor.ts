import { Request, Response, NextFunction } from 'express'
import { AppCustomError } from '../types/error.types'

const BAD_REQUEST_ERROR_STATUS_CODE = 400
const INTERNAL_SERVER_ERROR_STATUS_CODE = 500

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof AppCustomError) {
    res.locals.statusCode = error.statusCode || BAD_REQUEST_ERROR_STATUS_CODE
  } else {
    res.locals.statusCode = INTERNAL_SERVER_ERROR_STATUS_CODE
  }
  res.locals.msg = error.message
  res.locals.data = { error }
  next()
}
