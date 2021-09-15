import log4js from 'log4js'
import { config } from '../config/log4js.config'
import { env } from '../config/env'

log4js.configure(config)

export const logger = log4js.getLogger()

if (env.mode === 'development') {
  logger.level = 'DEBUG'
} else if (env.mode === 'production') {
  logger.level = 'INFO'
}
