const express = require('express');
const booksController = require('../controllers/booksController');

const router = express.Router();

router.get('/books', booksController.getAllBooks);
router.get('/books/:id', booksController.getBookById);
router.post('/books', booksController.addBook);

module.exports = router;