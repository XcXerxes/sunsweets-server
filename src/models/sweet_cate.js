module.exports = (sequelize, DataType) => {
  return sequelize.define('sweet_cate', {
    id: {
      type: DataType.UUID,
      primaryKey: true,
      defaultValue: DataType.UUIDV1,
    },
    title: DataType.STRING(64),
    sweet_order: DataType.INTEGER, //分类
    area: DataType.STRING,
    createdAt: DataType.DATE,
    updatedAt: DataType.DATE
  }, {
      timestamps: false,
      underscored: true,
       classMethods: {
        associate: function(models){
          console.log(models)
          //models.sweet_cate.hasMany(models.sweet_info)
        }
      },
      //freezeTableName: true // Model 对应的表名将与model名相同
    })
}