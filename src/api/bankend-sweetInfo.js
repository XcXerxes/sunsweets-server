const models = require('../models')
const general = require('./general')
const bankendShop = require('./bankend-shop')
const moment = require('moment')
const uuidV1 = require('uuid/v1')
const assertError = require('../utils/asserts')
/**
 * 添加甜品
 * @methods create
 */

exports.create = (req, res) =>{
  const {title, thumb, caption, desc, category_id, area, diff, shop} = req.body
  if( !title || !thumb || !caption || !desc || !category_id || !area || !diff || !shop ||(shop && !Array.isArray(shop))){
    res.json(assertError('参数不对'))
  }
  const id = uuidV1()
  let p2 = []
  let shopIdList = []
  shop.forEach( (item) => {
    p2.push(models.shop.create(Object.assign({}, item, {
      sweet_id: id,
      createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
    })).then(result => {
      shopIdList.push(result.id)
    }).catch(err =>{
      res.json(assertError(err.toString()))
    }))
  })
  Promise.all(p2).then(()=>{
    models.sweet_info.create(Object.assign({}, req.body, {
      id,
      shop_id:shopIdList.toString(),
      createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
    }).then(result => {
      res.json({
        code: 200,
        message: '添加成功'
      })
    }).catch(err => {
      res.json(assertError(err.toString()))
    }))
  }).catch(err=> {
    res.json(assertError(err.toString()))
  })
}


/**
 * 甜品详情列表
 */

exports.list = (req, res) => {
  general.list(req, res, models.sweet_info)
}

/**
 * 查看甜品详情
 * @methods getItem
 */

exports.getItem = (req, res) =>{
  const {id} = req.query
  if(!id){
    res.json(assertError('参数错误'))
  }
  return models.sweet_info.findById(id).then(result => {
    if(!result){
      return res.json({
        code: -200,
        data: null
      })
    }
  })
}