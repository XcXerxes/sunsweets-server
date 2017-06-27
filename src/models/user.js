"use strict"
const moment = require('moment')

module.exports = (sequelize, DataType) => {
    const User = sequelize.define('user', {
        username: {
            type: DataType.STRING(64),
            primaryKey: true
        },
        password: DataType.STRING(64),
        role: DataType.STRING(32)
    }, {
            //freezeTableName: true // Model 对应的表名将与model名相同
        })
    return User
}