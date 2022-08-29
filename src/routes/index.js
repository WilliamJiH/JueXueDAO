module.exports.registerRoutes = (app) => {
  app.use('/api', require('./test'))
}
