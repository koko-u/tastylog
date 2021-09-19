import createConnectionPool, { sql } from '@databases/mysql'
import { env } from '../config/env'
import { logger } from '../logger'

const connectionString = `mysql://${env.db.user}:${env.db.password}@${env.db.host}:${env.db.port}/${env.db.name}`

const db = createConnectionPool(connectionString)

export { db, sql }

process.once('SIGTERM', () => {
  db.dispose().catch(logger.application.error)
})

// export const run = async (): Promise<any[]> => {
//   const db = createConnectionPool(connectionString)
//
//   //const result = await db.query(sql`SELECT * FROM t_user LIMIT 10`)
//   const result = await db.query(sql`SELECT id, name, email From t_user`)
//
//   await db.dispose()
//
//   return result
// }
