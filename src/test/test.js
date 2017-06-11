var Mock = require('mockjs')
var moment = require('moment')
var uuidV1 = require('uuid/v1')
var models = require('../models')

var data = Mock.mock({
    'data|1':[{
        id:uuidV1(),
        img: '@Image',
        title: '@title(3)',
        caption: '@cparagraph(1)',
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: '@Date'
    }]
})
//console.log(data)
    models.carousel.create(data.data).then(result =>{
        //console.log(result)
    })

