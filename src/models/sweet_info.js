module.exports = (sequelize, DataType) =>{
  return sequelize.define('sweet_info',{
    id:{
      type: DataType.STRING(64),
      primaryKey: true
    },
    title: DataType.STRING(64),
    thumb: DataType.STRING, // 缩略图
    caption: DataType.TEXT, // 简要说明
    desc: DataType.TEXT,   // 具体的内容
    category_id: DataType.STRING, // 分类
    area_id: DataType.STRING,   // 地区
    diff: DataType.INTEGER,  // 操作难度
    shop_id: DataType.STRING, //餐厅
  })
}