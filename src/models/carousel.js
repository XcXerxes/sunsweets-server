module.exports = (sequelize, DataType) => {
  return sequelize.define('carousel', {
    id: {
      type: DataType.UUID,
      primaryKey: true,
      defaultValue: DataType.UUIDV1 
    },
    img: DataType.STRING,  // 轮播图片
    title: DataType.STRING, // 标题
    caption: DataType.STRING,// 简要介绍
  }, {
      //freezeTableName: true // Model 对应的表名将与model名相同
    })
}