const Ajv = require('ajv');
const ajv = new Ajv();
const booksModel = require('../models/booksModel');

function validateSchema(schema) {
  return (req, res, next) => {
    const validateFn = ajv.compile(schema);
    const valid = validateFn(req.body);
    if (!valid) {
      return res.status(400).json({ error: validateFn.errors });
    }
    next();
  };
}

function checkDuplicateBookName() {
  return (req, res, next) => {
    const books = booksModel.getAllBooks();
    const { name } = req.body;
    const id = req.params.id;
    const isDuplicate = books.some(book => book.name === name && book.id !== id);
    if (isDuplicate) {
      return res.status(400).json({ error: `Book with name ${name} already exists` });
    }
    next();
  }
}

function validateBook() {
  return (req, res, next) => {
    const { name, genre } = req.body;

    if (!name || !genre ) {
      return res.status(400).json({ error: "Name and Genre are required" });
    } 
    next();
  }
}

module.exports = {
    validateSchema,
    checkDuplicateBookName,
    validateBook
}