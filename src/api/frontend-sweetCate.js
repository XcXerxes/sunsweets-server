const general = require('./general')
const models = require('../models')

/**
 * 获取所有的分类信息列表
 * @methods       getAll
 */

exports.getAll = (req, res) => {
  models.sweet_cate.findAll().then(data => {
    res.json({
      code: 200,
      data:data
    })
  }).catch(err => {
    res.json({
      code: -200,
      message:err.toString()
    })
  })
}