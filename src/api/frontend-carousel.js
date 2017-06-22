const models = require('../models')
const general = require('./general')


/**
 * @methods  list
 * 获取轮播图列表
 */

exports.list = (req, res) => {
  general.list(req, res, models.carousel)
}

