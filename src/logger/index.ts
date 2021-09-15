import log4js from 'log4js'
import { config } from '../config/log4js.config'

log4js.configure(config)

export default log4js.getLogger()
