
const { body } = require('express-validator');
const createPublisher = [ body('name').notEmpty().withMessage('name required') ];
const updatePublisher = [ body('name').optional().notEmpty().withMessage('invalid name') ];
module.exports = { createPublisher, updatePublisher };
