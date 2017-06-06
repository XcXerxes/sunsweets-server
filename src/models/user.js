"use strict"

module.exports = (sequelize, DataType) => {
    const User = sequelize.define('User',{
        username:{
            type: DataType.STRING(64),
            primaryKey: true
        },
        password: DataType.STRING(64)
    })
    return User
}