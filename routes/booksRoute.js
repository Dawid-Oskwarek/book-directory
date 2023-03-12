const express = require('express');
const booksController = require('../controllers/booksController');
const bookMiddleware = require('../middlewares/bookMiddleware');
const { bookSchema } = require('../data/schemas');

const router = express.Router();

router.get('/books', booksController.getAllBooks);
router.get('/books/:id', booksController.getBookById);
router.post('/books', bookMiddleware.validateSchema(bookSchema), bookMiddleware.checkDuplicateBookName(), booksController.addBook);
router.put('/books/:id', bookMiddleware.validateSchema(bookSchema), bookMiddleware.checkDuplicateBookName(), booksController.updateBookById);
router.delete('/books/:id', booksController.deleteBookById);

module.exports = router;