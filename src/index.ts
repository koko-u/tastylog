import express from 'express'
import * as dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT ?? 3000
const app = express()
const router = express.Router()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

router.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    res.send('Hello World')
  },
)
app.use('/', router)

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
