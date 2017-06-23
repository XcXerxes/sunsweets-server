const models = require('../models')
const moment = require('moment')
const uuidV1 = require('uuid/v1')
models.sweet_info.belongsTo(models.sweet_cate)

models.sweet_info.create({
    title:'酒酿汤圆',
    thumb: 'sdsd',
    caption:'酒酿汤圆',
    desc:'台湾甜点台湾甜点台湾甜点台湾甜点台湾甜点',
    sweet_cate_id:'68e42bb0-5273-11e7-a15d-9121e3d54cd2',
    area:'710000',
    diff:4,
    shop_id:'2323',
    createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
    updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
}).then(()=>{
  models.sweet_info.findAndCountAll({
      include:[{
        model: models.sweet_cate,
        where:{
          id:'8e284950-5247-11e7-bafa-1fa59339434f'
        }
      }]
  }).then(data=>{
      console.log(JSON.stringify(data))
  })
})
