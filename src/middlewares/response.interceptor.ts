import { WebResponse } from '@src/types/web.type'
import { Request, Response, NextFunction } from 'express'

const OK_STATUS_CODE = 200
export const responseInterceptor = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = res.locals.statusCode || OK_STATUS_CODE
  const response = new WebResponse(res.locals.data, res.locals.msg)

  res.status(statusCode).send(response)
}
