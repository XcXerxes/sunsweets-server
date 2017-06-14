
const moment = require('moment')

const fs = require("fs")
const path = require("path")
const Sequelize = require("sequelize")
const config = require('../config')
const sequelize = new Sequelize(config.database, config.username, config.password, config)

const dirs = fs.readdirSync(path.join(__dirname, '..', 'models'))

dirs.filter(file => (file.indexOf('.') !== 0 && file !== 'index.js'))
    .forEach(file => {
        let model = sequelize.import(path.join(__dirname,'..','models/'+file))
        model.sync({ force: true })
    })

