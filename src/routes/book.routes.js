
const router = require('express').Router();
const { list, create, getById, update, remove } = require('../controllers/book.controller');
const { authRequired } = require('../middleware/auth');
const { createBook, updateBook } = require('../validators/book.validators');
const { handleValidation } = require('../middleware/validate');
router.use(authRequired);
router.get('/', list);
router.post('/', createBook, handleValidation, create);
router.get('/:id', getById);
router.put('/:id', updateBook, handleValidation, update);
router.delete('/:id', remove);
module.exports = router;
