
module.exports = (sequelize, DataTypes) => sequelize.define('User', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  email: { type: DataTypes.STRING, unique: true, allowNull: false, validate: { isEmail: true }},
  passwordHash: { type: DataTypes.STRING, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
}, { tableName: 'users', underscored: true });
