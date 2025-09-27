
require('dotenv').config();
const { sequelize, User, Author, Publisher, Book } = require('../src/models');
const { hashPassword } = require('../src/utils/password');
(async () => {
  try {
    await sequelize.sync({ alter: false });
    const passwordHash = await hashPassword('Admin@123');
    await User.findOrCreate({ where: { email: 'admin@example.com' }, defaults: { name:'Admin', passwordHash } });
    const [a1] = await Author.findOrCreate({ where: { name: 'J. K. Rowling' }, defaults: { bio: 'Author of Harry Potter' } });
    const [a2] = await Author.findOrCreate({ where: { name: 'George R. R. Martin' }, defaults: { bio: 'Author of A Song of Ice and Fire' } });
    const [p1] = await Publisher.findOrCreate({ where: { name: 'Bloomsbury' }, defaults: { address: 'London' } });
    const [p2] = await Publisher.findOrCreate({ where: { name: 'Bantam Books' }, defaults: { address: 'New York' } });
    await Book.findOrCreate({ where: { title: "Harry Potter and the Philosopher's Stone" }, defaults: { authorId: a1.id, publisherId: p1.id, publishedYear: 1997 } });
    await Book.findOrCreate({ where: { title: 'A Game of Thrones' }, defaults: { authorId: a2.id, publisherId: p2.id, publishedYear: 1996 } });
    console.log('Seed complete'); process.exit(0);
  } catch(e){ console.error(e); process.exit(1); }
})();
