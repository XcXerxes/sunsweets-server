const models = require('../models')
const assertError = require('../utils/asserts')
const utils = require('../utils')

models.sweet_info.belongsTo(models.sweet_cate)
models.sweet_info.hasMany(models.shop)

/**
 * @methods item 包含 关联的sweet_cate表和shop表
 */

exports.item = (req, res) => {
  const id = req.params.id || req.query.id || req.body.id
  if (!id) {
    res.json(assertError('参数错误'))
  }
  models.sweet_info.find({
    where: {
      id
    },
    include: [
      {
        model: models.sweet_cate
      },
      {
        model: models.shop,
        required: true
      }
    ]
  }).then(result => {
    console.log(result)
    return res.json({
      code: 200,
      data: result || {}
    })
  }).catch(err => {
    return res.json(assertError(err, toString()))
  })
}

/**
 * @methods list 包含过虑 和 排序
 */

exports.list = (req, res) => {
  let { limit, currentPage, sort, sweetCateId, area} = req.query
  const _parseParams = utils.parsePagination({limit, currentPage, sort})
  let params = {}
  if (area) {
    params.area = area
  }
  if (sweetCateId) {
    params.sweetCateId = sweetCateId
  }
  models.sweet_info.findAndCountAll(Object.assign({}, _parseParams, {
    where: params
  })).then(result => {
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
}
