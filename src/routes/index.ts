import express from 'express'

export const router = express.Router()

router.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('index', { title: 'Index', name: 'index' })
  },
)
