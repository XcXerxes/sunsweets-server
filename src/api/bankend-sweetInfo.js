const models = require('../models')
const general = require('./general')
const bankendShop = require('./bankend-shop')
const moment = require('moment')
const uuidV1 = require('uuid/v1')
const assertError = require('../utils/asserts')
/**
 * 添加甜品
 */

exports.create = (req, res) =>{
  const {title, thumb, caption, desc, category_id, area, diff, shop} = req.body
  if( !title || !thumb || !caption || !desc || !category_id || !area || !diff || !shop){
    res.json(assertError('参数不对'))
  }
}


/**
 * 甜品详情列表
 */

exports.list = (req, res) => {
  general.list(req, res, models.sweet_info)
}