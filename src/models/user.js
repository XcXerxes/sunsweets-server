"use strict"

module.exports = (sequelize, DataType) => {
    const User = sequelize.define('User',{
        id:{
            type: DataType.STRING(64),
            primaryKey: true
        },
        username: DataType.STRING(64),
        password: DataType.STRING(64),
    })
    return User
}