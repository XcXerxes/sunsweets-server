"use strict"

const fs = require("fs")
const path = require("path")
const Sequelize = require("sequelize")
const config = require('./src/config')
const sequelize = new Sequelize(config.database, config.username, config.password, config)

var Info = sequelize.define('info', {
    id:{
        type:Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    name: Sequelize.STRING(64),
},{
    underscored: true
})

var InfoMap = sequelize.define('infoMap', {
    id:{
        type:Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    title: Sequelize.STRING,
    info_id: {
        type:Sequelize.UUID,
        allowNull: false
    },
},{
    underscored: true
})

//InfoMap.hasOne(Info)
InfoMap.belongsTo(Info);
/*sequelize.sync({force: true}).then(() => {
    Info.create({
        name: '夏日嬷嬷茶',
    })
   
})*/

InfoMap.create({
        title: '台湾甜点',
        info_id:"062c33da-8997-4b02-ad14-324175a48754"
    }).then( ()=>{
        InfoMap.findAll({
    include: [Info]
}).then(data =>{
    console.log(JSON.stringify(data))
})
    })

