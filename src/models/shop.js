module.exports = (sequelize, DataType) =>{
  return sequelize.define('shop',{
    id:{
      type: DataType.STRING(64),
      primaryKey: true
    },
    name: DataType.STRING(64), // 餐厅名称
    sweet_id: DataType.STRING(64), // 所属甜品的id
    level:DataType.INTEGER,  // 推荐指数，最高5星
    area: DataType.STRING,  // 餐厅的地址
    imgGroup: DataType.STRING // 餐厅的照片                  
  },{
    timestamps:false
  })
}