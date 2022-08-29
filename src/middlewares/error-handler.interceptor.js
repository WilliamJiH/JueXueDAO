const errorHandler = function (error, req, res, next) {
  res.locals.msg = error.message
  res.locals.data = { error }
  next()
}

module.exports = { errorHandler }
