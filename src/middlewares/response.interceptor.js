/**
 * Wrap response.
 */
const responseInterceptor = async (req, res, next) => {
  res.send({ msg: res.locals.msg || 'OK', data: res.locals.data })
  next()
}

module.exports = { responseInterceptor }
