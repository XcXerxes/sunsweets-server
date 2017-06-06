module.exports = (sequelize, DataType) =>{
  return sequelize.define('sweetCategory',{
    id:{
      type: DataType.STRING(64),
      primaryKey: true
    },
    name: DataType.STRING(64), // 餐厅名称
    level:DataType.INTEGER,  // 推荐指数，最高5星
    area: DataType.STRING,  // 餐厅的地址
    imgGroup: DataType.STRING // 餐厅的照片                  
  },{
    timestamps:false
  })
}