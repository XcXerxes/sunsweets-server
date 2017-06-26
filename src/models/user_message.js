module.exports = (sequelize, DataType) => {
  return sequelize.define('user_message', {
    id: {
      type: DataType.UUID,
      primaryKey: true,
      defaultValue: DataType.UUIDV1
    },
    name: DataType.STRING(10),
    contact: DataType.STRING,
    content: DataType.TEXT
  })
}