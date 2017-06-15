module.exports = (sequelize, DataType) => {
  return sequelize.define('carousel', {
    id: {
      type: DataType.STRING(64),
      primaryKey: true
    },
    img: DataType.STRING,  // 轮播图片
    title: DataType.STRING, // 标题
    caption: DataType.STRING,// 简要介绍
    createdAt: DataType.DATE,
    updatedAt: DataType.DATE
  }, {
      timestamps: false,
      //freezeTableName: true // Model 对应的表名将与model名相同
    })
}