import express from 'express'

import cors from 'cors'
import logger from 'morgan'
import path from 'path'
import cookieParser from 'cookie-parser'

import fileUpload from 'express-fileupload'

// mongoose and mongo connection
import mongoose from '@/db/mongoose'

import { responseInterceptor } from '@/middlewares/response.interceptor'
import { errorHandler } from '@/middlewares/error-handler.interceptor'

import { FileNotUploadedException } from '@/types/error.types'

// Import routers
import testRouter from '@/routes/test.api'
import articlesRouter from '@/routes/articles.api'
import scholarsRouter from '@/routes/scholars.api'

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
    this.server.use(
      fileUpload({
        createParentPath: true,
        limits: { fileSize: 30 * 1024 * 1024 },
        limitHandler: (req, res, next) => {
          throw new FileNotUploadedException('File exceeded size limit.')
        },
      })
    )

    this.server.use(cors())
    this.server.use(express.json())
    this.server.use(express.urlencoded({ extended: false }))
    this.server.use(cookieParser())
    this.server.use(express.static(path.join(__dirname, 'public')))

    this.server.use(logger('dev'))
  }

  postprocessMiddlewares() {
    this.server.use(errorHandler)
    this.server.use(responseInterceptor)
  }

  routes() {
    this.server.use('/api', testRouter)
    this.server.use('/api', articlesRouter)
    this.server.use('/api', scholarsRouter)
  }
}

export default new App().server
