import express from 'express'
import * as dotenv from 'dotenv'
import { router } from './routes'
import { resolve } from 'path'

dotenv.config()

const PORT = process.env.PORT ?? 3000
const app = express()

app.set('views', resolve(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/public', express.static(resolve(__dirname, 'public')))

app.use('/', router)

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
