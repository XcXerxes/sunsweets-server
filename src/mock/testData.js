const models = require('../models')
const moment = require('moment')
const uuidV1 = require('uuid/v1')

models.user.create({
    username: 'admin',
    password: '21232f297a57a5a743894a0e4a801fc3',
    role: 'admin',
    createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
    updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
})

/*models.sweet_cate.create({
    title: '台湾甜点',
    sweet_order: 2,
    createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
    updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
})*/
//console.log((models))
