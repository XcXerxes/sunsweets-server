"use strict"

module.exports = (sequelize, DataType) => {
    const User = sequelize.define('User', {
        username: {
            type: DataType.STRING(64),
            primaryKey: true
        },
        password: DataType.STRING(64),
        authorize: DataType.STRING(32),
        createdAt: DataType.DATE,
        updatedAt: DataType.DATE
    })
    return User
}