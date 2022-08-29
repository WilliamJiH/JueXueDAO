import express from 'express'

import cors from 'cors'
import logger from 'morgan'
import path from 'path'

// mongoose and mongo connection
import mongoose from './db/mongoose'

import { responseInterceptor } from './middlewares/response.interceptor'
import { errorHandler } from './middlewares/error-handler.interceptor'
import testRouter from './routes/test'

// app
// app.use(logger('dev'))
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
// app.use(cookieParser())
// app.use(express.static(path.join(__dirname, 'public')))

class App {
  public server

  constructor() {
    this.server = express()
    this.setup()

    this.preprocessMiddlewares()
    this.routes()
    this.postprocessMiddlewares()
  }

  setup() {
    mongoose.set('bufferCommands', false)
  }

  preprocessMiddlewares() {
    this.server.use(express.json())
    this.server.use(cors())
    this.server.use(logger('dev'))
    this.server.use(express.static(path.join(__dirname, 'public')))
  }

  postprocessMiddlewares() {
    this.server.use(errorHandler)
    this.server.use(responseInterceptor)
  }

  routes() {
    // registerRoutes(this.server)
    this.server.use('/api', testRouter)
  }
}

export default new App().server
