const jwt = require('jsonwebtoken')
const models = require('../models')
const assertError = require('../utils/asserts')
const moment = require('moment')

// 验证secret是否存在
require('../utils').createSecret()

// 密钥时间戳
const superSecret = require('../config/superSecret.json')['superSecret']


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
  models.user.findOne({
    where: {
      username,
      password
    }
  }).then(user => {
    console.log("user============"+user)
    if (!user) {
      return res.json(assertError('用户名或者密码错误'))
    } else if (user) {
      models.user.update({
        updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
      }, {
          where: {
            username
          }
        })
      const token = jwt.sign({ username: encodeURI(username), password }, superSecret.toString(), {
        expiresIn: 60 * 60 * 3 // expires in 3 hours token 过期时间为3 hours
      });
      return res.json({
        code: 200,
        message: '登录成功',
        data: token
      })
    }
    //return res.json(assertError('用户名或密码错误'))
  }).catch(err => {
    res.json(assertError(err.toString()))
  })

}

