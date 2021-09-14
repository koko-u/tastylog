import express from 'express'
import * as dotenv from 'dotenv'
import { router } from './routes'
import path from 'path'
import favicon from 'serve-favicon'

dotenv.config()

const PORT = process.env.PORT ?? 3000
const app = express()

app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use('/public', express.static(path.resolve(__dirname, 'public')))

app.use('/', router)

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
