import path from 'path'

export const env = {
  port: process.env.PORT ?? 3000,
  mode: process.env.NODE_ENV,
  logRootDir: process.env.LOG_ROOT_DIR ?? path.join(__dirname, 'logs'),
  db: {
    host: process.env.DB_HOST ?? 'localhost',
    port: process.env.DB_PORT ?? '3306',
    name: process.env.DB_NAME ?? 'tastylog',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
}
