
module.exports = (sequelize, DataTypes) => sequelize.define('Publisher', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
  address: { type: DataTypes.STRING },
}, { tableName: 'publishers', underscored: true });
