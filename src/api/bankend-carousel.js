const models = require('../models')
const general = require('./general')
const moment = require('moment')
const uuidV1 = require('uuid/v1');
const assertError = require('../utils/asserts')


/**
 * 获取轮播图列表
 */

exports.getList = (req, res) => {
    general.list(req, res, models.carousel)
}

/**
 * 添加轮播图照片
 * 
 */

exports.create = (req, res) => {
    const { title, img, caption } = req.body
    if (!caption || !title || !img) {
        res.json(assertError('参数错误'))
    }
    return models.carousel.create({
        id: uuidV1(),
        title,
        img,
        caption,
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
    }).then((result) => {
        res.json({
            code: 200,
            message: '添加成功',
            data: result.id
        })
    }).catch(err => {
        res.json(assertError(err.toString()))
    })
}

/**
 * 查看单个
 */

exports.getItem = (req, res) => {
    general.item(req, res, models.carousel)
}

/**
 * 删除单个
 */

exports.deleteById = (req, res) => {
    general.deleteById(req, res, models.carousel)
}

/**
 * 单个修改
 */

exports.modify = (req, res) => {
    const { id } = req.body
    if (!id) {
        res.json(assertError('参数错误'))
    }

    general.updateData(Object.assign({}, req.body, {
        updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
    }), res, models.carousel)
}
