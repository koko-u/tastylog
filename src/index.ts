import express from 'express'
import { router } from './routes'
import path from 'path'
import favicon from 'serve-favicon'
import expressEjsLayouts from 'express-ejs-layouts'
import { logger } from './logger'
import { env } from './config/env'
import { requestLogger } from './middlewares/requestLogger'
import { errorLogger } from './middlewares/errorLogger'

const app = express()

app.disable('x-powered-by')

app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(expressEjsLayouts)
app.set('layout', path.join(__dirname, 'views', 'layouts', 'layout'))

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use('/public', express.static(path.resolve(__dirname, 'public')))

app.use(requestLogger())
app.use('/', router)
app.use(errorLogger())

app.listen(env.port, () => logger.console.info(`listening on port ${env.port}`))
