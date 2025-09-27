
const router = require('express').Router();
const { list, create, getById, update, remove } = require('../controllers/author.controller');
const { authRequired } = require('../middleware/auth');
const { createAuthor, updateAuthor } = require('../validators/author.validators');
const { handleValidation } = require('../middleware/validate');
router.use(authRequired);
router.get('/', list);
router.post('/', createAuthor, handleValidation, create);
router.get('/:id', getById);
router.put('/:id', updateAuthor, handleValidation, update);
router.delete('/:id', remove);
module.exports = router;
