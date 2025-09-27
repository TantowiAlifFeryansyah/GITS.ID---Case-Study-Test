
const { User } = require('../models');
const { hashPassword, comparePassword } = require('../utils/password');
const { sign } = require('../utils/jwt');

async function register(req, res, next){
  try{
    const { email, password, name } = req.body;
    const exists = await User.findOne({ where: { email } });
    if(exists) return res.status(409).json({ error: 'Email already taken' });
    const passwordHash = await hashPassword(password);
    const user = await User.create({ email, passwordHash, name });
    res.status(201).json({ id: user.id, email: user.email, name: user.name });
  } catch(e){ next(e); }
}

async function login(req, res, next){
  try{
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if(!user) return res.status(401).json({ error: 'Invalid credentials' });
    const ok = await comparePassword(password, user.passwordHash);
    if(!ok) return res.status(401).json({ error: 'Invalid credentials' });
    const token = sign({ sub: user.id, email: user.email, name: user.name });
    res.json({ token });
  } catch(e){ next(e); }
}

module.exports = { register, login };
