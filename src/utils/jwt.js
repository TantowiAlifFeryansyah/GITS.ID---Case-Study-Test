
const jwt = require('jsonwebtoken');
const { JWT_SECRET='secret', JWT_EXPIRES_IN='1d' } = process.env;
function sign(payload){ return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN }); }
function verify(token){ return jwt.verify(token, JWT_SECRET); }
module.exports = { sign, verify };
