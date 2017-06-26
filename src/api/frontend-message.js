const models = require('../models')
const assertError = require('../utils/asserts')
/**
 * @methods create
 * // 添加留言信息
 */

exports.create = (req, res) => {
  const {name, contact, content} = req.body
  if (!name || !contact || !content) {
    res.json(assertError('参数错误'))
  }
  models.user_message.create({
    name,
    contact,
    content
  }).then(message => {
    return res.json({
      code: 200,
      message: '留言发送成功',
      data: message.id
    }).catch(err => {
      return res.json(assertError(err.toString()))
    })
  })
}
