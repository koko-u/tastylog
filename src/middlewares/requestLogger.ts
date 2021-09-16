import express from 'express'
import { logger } from '../logger'
import log4js, { Format } from 'log4js'

type ConnectLoggerOption = {
  format?: Format
  level?: string
}

// export const requestLogger = () => {
//   return (req: Request, res: Response, next: NextFunction): void => {
//     if (req) {
//       logger.application.info(
//         `Method: ${req.method}, Params: ${joined(req.params)} Query: ${joined(
//           req.query,
//         )}`,
//       )
//       if (req.body) {
//         logger.application.debug(req.body)
//       }
//     }
//     next()
//   }
// }
export const requestLogger = (
  options: ConnectLoggerOption = {},
): express.Handler => {
  options.level ??= 'auto'

  return log4js.connectLogger(logger.application, options)
}
