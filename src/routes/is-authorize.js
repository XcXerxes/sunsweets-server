const jwt = require('jsonwebtoken')
const superSecret = require('../config/superSecret.json')['superSecret']

module.exports = (req, res, next) => {
  const sun_token = req.body.token || req.param('token') || req.headers['sweet-token']
  if (sun_token) {
    jwt.verify(sun_token, superSecret.toString(), (err, decoded) => {
      if (!err) {
        req.decoded = decoded
        next()
      } else {
        //res.cookies('sun_userid', '', { maxAge: 0 })
        return res.json({
          code: -500,
          message: '验证失败,请重新登录',
          data: ''
        })
      }
    })
  } else {
    return res.json({
      code: -500,
      message: '没有权限,请重新登录',
      data: ''
    })
  }
}
