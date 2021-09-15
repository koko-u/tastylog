import * as dotenv from 'dotenv'
dotenv.config()

export const env = {
  port: process.env.PORT ?? 3000,
  mode: process.env.NODE_ENV,
}
