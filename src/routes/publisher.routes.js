
const router = require('express').Router();
const { list, create, getById, update, remove } = require('../controllers/publisher.controller');
const { authRequired } = require('../middleware/auth');
const { createPublisher, updatePublisher } = require('../validators/publisher.validators');
const { handleValidation } = require('../middleware/validate');
router.use(authRequired);
router.get('/', list);
router.post('/', createPublisher, handleValidation, create);
router.get('/:id', getById);
router.put('/:id', updatePublisher, handleValidation, update);
router.delete('/:id', remove);
module.exports = router;
