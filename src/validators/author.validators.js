
const { body } = require('express-validator');
const createAuthor = [ body('name').notEmpty().withMessage('name required') ];
const updateAuthor = [ body('name').optional().notEmpty().withMessage('invalid name') ];
module.exports = { createAuthor, updateAuthor };
