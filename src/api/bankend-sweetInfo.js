const models = require('../models')
const general = require('./general')
const bankendShop = require('./bankend-shop')
const moment = require('moment')
const uuidV1 = require('uuid/v1')
const assertError = require('../utils/asserts')

models.sweet_info.belongsTo(models.sweet_cate)
models.sweet_info.hasMany(models.shop)

/**
 * 添加甜品
 * @methods create
 */

exports.create = (req, res) => {
  console.log(req.body)
  const { title, thumb, caption, desc, sweetCateId, area, diff, shop_id } = req.body
  if (!title || !thumb || !caption || !desc || !sweetCateId || !area || !diff || !shop_id) {
    res.json(assertError('参数不对'))
  }
  models.sweet_info.create(Object.assign({}, req.body, {
  })).then(result => {
    return res.json({
      code: 200,
      message: '添加成功',
      data: result.id
    })
  }).catch(err => {
    return res.json(assertError(err.toString()))
  })
  /*let p2 = []
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
  })*/
}


/**
 * 甜品列表
 */

exports.getList = (req, res) => {
  let { limit, currentPage, sort } = req.query
  const sortName = (sort && sort.split('-')[0]) || 'id'
  const sortType = (sort && sort.split('-')[1]) || 'asc'
  limit = parseInt(limit, 10) || 10
  currentPage = parseInt(currentPage, 10) || 1
  console.log(currentPage+'======'+limit)
  const offset = (currentPage - 1) * limit
  models.sweet_info.findAndCountAll({
    offset,
    limit,
    order: `${sortName} ${sortType}`,
    include:[{
      model: models.sweet_cate,
    }]
  }).then(result => {
    const { count, rows } = result
    const totalPage = Math.ceil(count / limit)
    console.log(result)
    res.json({
      code: 200,
      data: rows,
      total: count,
      totalPage
    })
  }).catch(err => {
    res.json({
      code: -200,
      message: err.toString()
    })
  })
  /*general.list(req, res, models.sweet_info)*/
}

/**
 * 查看甜品详情
 * @methods getItem
 */

exports.getItem = (req, res) => {
  const { id } = req.query || req.params || req.body
  if (!id) {
    res.json(assertError('参数错误'))
  }
  return models.sweet_info.findById(id).then(result => {
    if (!result) {
      return res.json({
        code: -200,
        data: null
      })
    }
    res.json({
      code: 200,
      data: result,
      message: 'success'
    })
  }).catch(err => {
    res.json(assertError(err.toString()))
  })
}

/**
 * 删除甜品
 * @methods deleteById
 */

exports.deleteById = (req, res) => {
  general.deleteById(req, res, models.sweet_info)
}

/**
 * 更新甜品
 * @methods modify
 */

exports.modify = (req, res) => {
  general.updateData(req, res, models.sweet_info)
}