const models = require('../models')
const moment = require('moment')

models.user.create({
    username: 'admin',
    password: '21232f297a57a5a743894a0e4a801fc3',
    authorize: 'admin',
    createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
    updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
})