const path = require('path')
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
  const {name, thumb, sweetInfoId, caption, content, read, collection, address, level} = req.body
  if(!name || !thumb || !sweetInfoId || !caption || !content || !level || !address){
    res.json(assertError('参数错误'))
  }
  models.shop.create({
    name,
    thumb,
    sweetInfoId,
    caption,
    content,
    level,
    read,
    collection,
    address
  }).then((result)=>{
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
  general.updateData(req, res, models.shop)
}
