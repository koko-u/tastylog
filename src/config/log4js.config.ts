import { env } from './env'
import path from 'path'

export const config = {
  appenders: {
    consoleLogAppender: {
      type: 'console',
      layout: {
        type: 'coloured',
      },
    },
    fileLogAppender: {
      type: 'dateFile',
      filename: path.join(env.logRootDir, 'application.log'),
      pattern: 'yyyy-MM-dd',
      layout: {
        type: 'basic',
      },
      daysToKeep: 14,
      keepFileExt: true,
    },
  },
  categories: {
    default: {
      appenders: ['consoleLogAppender'],
      level: 'INFO',
    },
    application: {
      appenders: ['fileLogAppender', 'consoleLogAppender'],
      level: 'INFO',
    },
  },
}
