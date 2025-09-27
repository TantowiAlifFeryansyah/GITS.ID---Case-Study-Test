
const { body } = require('express-validator');
const createBook = [
  body('title').notEmpty().withMessage('title required'),
  body('publishedYear').optional().isInt().withMessage('publishedYear must be int'),
  body('authorId').isInt().withMessage('authorId required'),
  body('publisherId').isInt().withMessage('publisherId required'),
];
const updateBook = [
  body('title').optional().notEmpty(),
  body('publishedYear').optional().isInt(),
  body('authorId').optional().isInt(),
  body('publisherId').optional().isInt(),
];
module.exports = { createBook, updateBook };
