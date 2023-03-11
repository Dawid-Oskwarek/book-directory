const express = require('express');
const booksController = require('../controllers/booksController');
const schema = require('../middlewares/requestBody');
const { bookSchema } = require('../data/schemas');

const router = express.Router();

router.get('/books', booksController.getAllBooks);
router.get('/books/:id', booksController.getBookById);
router.post('/books', schema.validateSchema(bookSchema), booksController.addBook);

module.exports = router;