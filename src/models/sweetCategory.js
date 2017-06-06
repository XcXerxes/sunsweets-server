module.exports = (sequelize, DataType) =>{
  return sequelize.define('sweetCategory',{
    id:{
      type: DataType.STRING(64),
      primaryKey: true
    },
    title: DataType.STRING(64)
  },{
    timestamps:false
  })
}