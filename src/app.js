const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

// mongoose and mongo connection
const { mongoose } = require('./db/mongoose')
const routes = require('./routes')

const { responseInterceptor } = require('./middlewares/response.interceptor')
const { errorHandler } = require('./middlewares/error-handler.interceptor')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

mongoose.set('bufferCommands', false) // don't buffer db requests if the db server isn't connected - minimizes http requests hanging if this is the case.

// API
routes.registerRoutes(app)

// Post-process interceptors
app.use(errorHandler)
app.use(responseInterceptor)

module.exports = app
