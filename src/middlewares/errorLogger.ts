import { Request, Response, ErrorRequestHandler, NextFunction } from 'express'
import { ParamsDictionary, Query } from 'express-serve-static-core'
import { logger } from '../logger'

export const errorLogger = (): ErrorRequestHandler => {
  return (
    err: unknown,
    req: Request<ParamsDictionary, unknown, unknown, Query>,
    res: Response,
    next: NextFunction,
  ): void => {
    if (err) {
      logger.application.error(err)
      next(err)

      return
    }
    next()
  }
}
