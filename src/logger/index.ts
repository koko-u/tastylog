import log4js from 'log4js'
import { config } from '../config/log4js.config'
import { env } from '../config/env'

log4js.configure(config)

const consoleLogger = log4js.getLogger()
const applicationLogger = log4js.getLogger('application')

if (env.mode === 'development') {
  consoleLogger.level = 'DEBUG'
  applicationLogger.level = 'DEBUG'
} else if (env.mode === 'production') {
  consoleLogger.level = 'INFO'
  applicationLogger.level = 'INFO'
}

export const logger = {
  console: consoleLogger,
  application: applicationLogger,
}
