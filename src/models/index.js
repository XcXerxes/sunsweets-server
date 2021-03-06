"use strict"

const fs = require("fs")
const path = require("path")
const Sequelize = require("sequelize")
const config = require('../config')
const sequelize = new Sequelize(config.database, config.username, config.password, config)



// 定义 当前目录下所有的数据 模型, (数据库表名为文件名)
let db = {};
const dirs = fs.readdirSync(__dirname)

dirs.filter(file => (file.indexOf('.') !== 0) && (file !== 'index.js'))
    .forEach(file => {
        let model = sequelize.import(path.join(__dirname, file))
        db[model.name] = model
})
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
