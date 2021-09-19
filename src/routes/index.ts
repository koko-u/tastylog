import express from 'express'
import { logger } from '../logger'
import { db, sql } from '../db'

export const router = express.Router()

router.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('index', { title: 'Index', name: 'index' })
  },
)

router.get('/test-conn', async (req: express.Request, res: express.Response): Promise<void> => {
  try {
    const result = await db.query(sql`SELECT id, name, email FROM t_user LIMIT 3`)
    res.json(result)
  } catch (err) {
    logger.application.error(err)
  }
})
