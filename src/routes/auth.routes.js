
const router = require('express').Router();
const { register, login } = require('../controllers/auth.controller');
const { registerValidator, loginValidator } = require('../validators/auth.validators');
const { handleValidation } = require('../middleware/validate');
router.post('/register', registerValidator, handleValidation, register);
router.post('/login', loginValidator, handleValidation, login);
module.exports = router;
