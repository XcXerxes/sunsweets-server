const jwt = require('jsonwebtoken')
const secret = require('../config/secret')

module.exports = (req, res, next) => {
  const { sun_userid } = req.cookies
  if (sun_userid) {
    jwt.verify(sun_userid, secret, (err, decoded) => {
      if (!err) {
        req.decoded = decoded
        next()
      } else {
        res.cookies('sun_userid', '', { maxAge: 0 })
        return res.json({
          code: -500,
          message: '登录验证失败',
          data: ''
        })
      }
    })
  } else {
    return res.json({
      code: -500,
      message: '请先登录',
      data: ''
    })
  }
}
