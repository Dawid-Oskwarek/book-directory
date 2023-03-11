const booksModel = require('../models/booksModel');

// GET /books
function getAllBooks(req, res) {
  try {
    const books = booksModel.getAllBooks();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while retrieving the books' });
  }
}

// GET /books/:id
function getBookById(req, res) {
  const id = parseInt(req.params.id);
  try {
    const book = booksModel.getBookById(id);
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ error: `Book with ID ${id} not found` });
    }
  } catch (err) {
    res.status(500).json({ error: `An error occurred while retrieving the book` });
  }
}

// POST /books
function addBook(req, res) {
  try {
  const book = req.body;
  const newBook = booksModel.addBook(book);
  res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ error: `An error occurred while saving the book` });
  }
}

module.exports = {
    getAllBooks,
    getBookById,
    addBook,
  };