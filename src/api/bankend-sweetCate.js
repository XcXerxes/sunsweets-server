const moment = require('moment')
const general = require('./general')
const models = require('../models')
const uuidV1 = require('uuid/v1')
const assertError = require('../utils/asserts')

/**
 * 列表
 */
exports.getList = (req, res) => {
  general.list(req, res, models.sweet_cate)
}

/**
 * 添加
 */

exports.create = (req, res) => {
  const { title, sweet_order, area} = req.body
  if (!title || !sweet_order || !area) {
    res.json(assertError('参数错误'))
  }
  return models.sweet_cate.create({
    title,
    sweet_order,
    area,
    createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
    updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
  }).then((result) => {
    res.json({
      code: 200,
      message: '添加成功',
      data: result.id
    })
  }).catch(err => {
    res.json(assertError(err.toString()))
  })
}

/**
 * 查看 单个
 */

exports.getItem = (req, res) =>{
  general.item(req, res, models.sweet_cate)
}


/**
 * 修改单个 
 */

exports.modify = (req, res) =>{
  general.updateData(req, res, models.sweet_cate)
}

/**
 * 删除 单个
 */

exports.deleteById = (req, res) =>{
  general.deleteById(req, res, models.sweet_cate)
}

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