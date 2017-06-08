const general = require('./general')
const models = require('../models')
const moment = require('moment')
const uuidV1 = require('uuid/v1')
const assertError = require('../utils/asserts')


/**
 * 门店列表
 * @methods getList
 */

exports.getList = (req, res) => {
  general.list(req, res, models.shop)
}

/**
 * 插入
 * insert
 */
exports.insert = (req, res) =>{
  const {id, name, sweet_id, address, level, imgGroup} = req.body
  if(!id || !name || !sweet_id || !address || !level || !imgGroup){
    res.json(assertError('参数错误'))
  }
  models.shop.create(Object.assign({}, req.body, {
    createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
    updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
  })).then((result)=>{
    res.json({
      code:200,
      message:'添加成功',
      data: result.id
    })
  }).catch(err => {
    res.json(assertError(err.toString()))
  })
}


/**
 * 查看门店信息
 * @method getItem
 */

exports.getItem = (req, res) => {
  general.item(req, res, models.shop)
}

/**
 * 删除门店信息
 * 
 */

exports.deleteById = (req, res) => {
  general.deleteById(req, res, models.shop)
}

/**
 * 编辑门店信息
 * @methods modify
 */

exports.modify = (req, res) => {
  const { id } = req.body
  if (!id) {
    res.json(assertError('参数错误'))
  }
  general.updateData(Object.assign({}, req.body, {
    updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
  }))
}