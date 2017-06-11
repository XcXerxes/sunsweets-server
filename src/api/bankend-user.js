const jwt = require('jsonwebtoken')
const models = require('../models')
const secret = require('../config/secret')
const assertError = require('../utils/asserts')
const moment = require('moment')

/**
 * 管理员登录
 * @method loginAdmin
 */

exports.login = (req, res) => {
  let { username, password } = req.body
  console.log(req.body)
  if (username === '' || password === '') {
    return res.json(assertError('请输入用户名和密码'))
  }
  models.User.findOne({
    where: {
      username,
      password
    }
  }).then(info => {
    if (info) {
      models.User.update({
        updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
      },{
        where:{
          username
        }
      })
      const remember_me = 2592000000
      const token = jwt.sign({ username }, secret.secret, { expiresIn: 60 * 60 * 24 * 30 })
      res.cookie('sun_userid', token, { maxAge: remember_me })
      return res.json({
        code: 200,
        message: '登录成功',
        data: token
      })
    }
    return res.json(assertError('用户名或密码错误'))
  }).catch(err => {
    res.json(assertError(err.toString()))
  })

}

