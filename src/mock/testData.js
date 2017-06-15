const models = require('../models')
const moment = require('moment')
const uuidV1 = require('uuid/v1')

/*models.user.create({
    username: 'admin',
    password: '21232f297a57a5a743894a0e4a801fc3',
    authorize: 'admin',
    createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
    updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
})*/

models.sweet_category.create({
    id: uuidV1(),
    title: '台湾甜点',
    sweet_order: 2,
    createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
    updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
})