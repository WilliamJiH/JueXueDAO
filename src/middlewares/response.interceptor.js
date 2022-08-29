/**
 * Wrap response.
 */
const responseInterceptor = async (req, res, next) => {
  res.send({ msg: res.msg || 'OK', data: res.data })
  next()
}

module.exports = { responseInterceptor }
