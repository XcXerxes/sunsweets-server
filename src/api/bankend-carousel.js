const models = require('../models')
const general = require('./general')

/**
 * 获取轮播图列表
 */

exports.getList = (req,res) =>{
    general.list(req, res, models.carousel)
}