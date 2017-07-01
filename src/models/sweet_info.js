module.exports = (sequelize, DataType) => {
  return sequelize.define('sweet_info', {
    id: {
      type: DataType.UUID,
      primaryKey: true,
      defaultValue: DataType.UUIDV1
    },
    title: DataType.STRING(64),
    thumb: DataType.STRING, // 缩略图
    caption: DataType.TEXT, // 简要说明
    desc: DataType.TEXT,   // 具体的内容
    reading: {
      type: DataType.INTEGER,
      defaultValue: 0
    }, // 浏览次数
    collection: {
      type: DataType.INTEGER,
      defaultValue: 0
    }, // 收藏
    sweetCateId: {
      type: DataType.UUID,
      allowNull: false
    }, // 分类
    area: DataType.STRING,   // 地区
    diff: DataType.INTEGER,  // 操作难度
  }, {
      classMethods: {
        associate: function (models) {
          console.log(models.sweet_cate)
          //models.sweet_info.belongsTo(models.sweet_cate)
        }
      }
      //freezeTableName: true // Model 对应的表名将与model名相同
    })
}