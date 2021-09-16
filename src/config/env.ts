import dotenv from 'dotenv'
import path from 'path'
dotenv.config()

export const env = {
  port: process.env.PORT ?? 3000,
  mode: process.env.NODE_ENV,
  logRootDir: process.env.LOG_ROOT_DIR ?? path.join(__dirname, 'logs'),
}
