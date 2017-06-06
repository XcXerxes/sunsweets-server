module.exports = (sequelize, DataType) =>{
  return sequelize.define('sweetCategory',{
    id:{
      type: DataType.STRING(64),
      primaryKey: true
    },
    img: DataType.STRING,  // 轮播图片
    title: DataType.STRING, // 标题
    caption: DataType.STRING // 简要介绍                   
  },{
    timestamps:false
  })
}