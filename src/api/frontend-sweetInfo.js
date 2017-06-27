const models = require('../models')
const assertError = require('../utils/asserts')

models.sweet_info.belongsTo(models.sweet_cate)
models.sweet_info.hasMany(models.shop)


/**
 * @methods item 包含 关联的sweet_cate表和shop表
 */

exports.item = (req, res) => {
  const id = req.params.id || req.query.id || req.body.id  
  if(!id) {
    res.json(assertError('参数错误'))
  }
  models.sweet_info.find({
    where: {
      id
    },
    include:[
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
    return res.json(assertError(err,toString()))
  })
}
