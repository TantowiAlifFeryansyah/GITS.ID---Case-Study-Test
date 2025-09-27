
const { verify } = require('../utils/jwt');
function authRequired(req, res, next){
  const header = req.headers['authorization'] || '';
  const [, token] = header.split(' ');
  if(!token) return res.status(401).json({error:'Unauthorized'});
  try{ req.user = verify(token); next(); } catch(e){ return res.status(401).json({error:'Invalid token'}); }
}
module.exports = { authRequired };
