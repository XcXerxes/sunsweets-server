module.exports = (sequelize, DataType) => {
  return sequelize.define('sweet_category', {
    id: {
      type: DataType.STRING(64),
      primaryKey: true
    },
    title: DataType.STRING(64),
    sweet_order: DataType.INTEGER, //分类
    createdAt: DataType.DATEONLY,
    updatedAt: DataType.DATEONLY
  }, {
      timestamps: false,
      //freezeTableName: true // Model 对应的表名将与model名相同
    })
}