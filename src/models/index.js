
const { Sequelize, DataTypes } = require('sequelize');
const { DB_HOST='localhost', DB_PORT='5432', DB_NAME='publishing_db', DB_USER='postgres', DB_PASS='postgres' } = process.env;
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, { host: DB_HOST, port: DB_PORT, dialect: 'postgres', logging: false });
const User = require('./user')(sequelize, DataTypes);
const Author = require('./author')(sequelize, DataTypes);
const Publisher = require('./publisher')(sequelize, DataTypes);
const Book = require('./book')(sequelize, DataTypes);
Author.hasMany(Book, { foreignKey: 'authorId', as: 'books', onDelete: 'RESTRICT' });
Book.belongsTo(Author, { foreignKey: 'authorId', as: 'author' });
Publisher.hasMany(Book, { foreignKey: 'publisherId', as: 'books', onDelete: 'RESTRICT' });
Book.belongsTo(Publisher, { foreignKey: 'publisherId', as: 'publisher' });
module.exports = { sequelize, Sequelize, User, Author, Publisher, Book };
