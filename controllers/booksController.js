const booksModel = require('../models/booksModel');

// GET /books
function getAllBooks(req, res) {
  const books = booksModel.getAllBooks();
  res.status(200).json(books);
}

// GET /books/:id
function getBookById(req, res) {
  const id = parseInt(req.params.id);
  const book = booksModel.getBookById(id);
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ error: `Book with ID ${id} not found` });
  }
}

// POST /books
function addBook(req, res) {
  const book = req.body;
  const newBook = booksModel.addBook(book);
  res.status(201).json(newBook);
}

module.exports = {
    getAllBooks,
    getBookById,
    addBook,
  };