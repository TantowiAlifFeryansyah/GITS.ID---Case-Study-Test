
module.exports = (sequelize, DataTypes) => sequelize.define('Book', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  publishedYear: { type: DataTypes.INTEGER, allowNull: true, field: 'published_year' },
  authorId: { type: DataTypes.INTEGER, allowNull: false, field: 'author_id' },
  publisherId: { type: DataTypes.INTEGER, allowNull: false, field: 'publisher_id' },
}, { tableName: 'books', underscored: true });
