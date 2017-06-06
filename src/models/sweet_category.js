module.exports = (sequelize, DataType) =>{
  return sequelize.define('sweet_category',{
    id:{
      type: DataType.STRING(64),
      primaryKey: true
    },
    title: DataType.STRING(64)
  },{
    timestamps:false
  })
}