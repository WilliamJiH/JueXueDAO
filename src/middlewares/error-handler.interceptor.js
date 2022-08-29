const errorHandler = function (error, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = error.message
  res.locals.error = req.app.get('env') === 'development' ? error : {}

  res.msg = error.message
  res.data = { error }
  next()
}

module.exports = { errorHandler }
