
module.exports = (sequelize, DataTypes) => sequelize.define('Author', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  bio: { type: DataTypes.TEXT },
}, { tableName: 'authors', underscored: true });
