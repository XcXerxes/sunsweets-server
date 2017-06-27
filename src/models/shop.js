module.exports = (sequelize, DataType) => {
  return sequelize.define('shop', {
    id: {
      type: DataType.UUID,
      primaryKey: true,
      defaultValue: DataType.UUIDV1
    },
    name: {
      type: DataType.STRING(64),
      allowNull: false
    }, // 餐厅名称
    thumb: {
      type: DataType.STRING(128),
      allowNull: false
    },  // 缩略图
    caption: {  // 餐厅描述
      type: DataType.TEXT,
      allowNull: false
    },
    read: {
      type: DataType.INTEGER(10),
      allowNull: false,
      defaultValue: 0
    }, // 浏览次数
    collection: {
      type: DataType.INTEGER(10),
      allowNull: false,
      defaultValue: 0 
    },
    content: {  // 餐厅内容
      type: DataType.TEXT,
      allowNull: false
    },
    sweetInfoId: {
      type: DataType.UUID,
      allowNull: false
    }, // 所属甜品的id
    level: {
      type: DataType.INTEGER(2),
      allowNull: false
    },  // 推荐指数，最高5星
    address: {
      type: DataType.STRING(128),
      allowNull: false
    },  // 餐厅的地址                
  }, {
     
      //freezeTableName: true // Model 对应的表名将与model名相同
    })
}