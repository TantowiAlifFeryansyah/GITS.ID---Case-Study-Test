
require('dotenv').config();
const { sequelize } = require('../src/models');
(async () => {
  try { await sequelize.sync({ alter: false }); console.log('DB sync complete'); process.exit(0); }
  catch(e){ console.error(e); process.exit(1); }
})();
