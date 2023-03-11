const fs = require('fs');
const uuid = require('uuid');

const filePath = 'books.json';

// Read all books from the JSON file
function getAllBooks() {
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(data);
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  
  // Read a single book with the specified ID from the JSON file
  function getBookById(id) {
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      const books = JSON.parse(data);
      const book = books.find(book => book.id === String(id));
      return book;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  
  // Add a new book to the JSON file
  function addBook(book) {
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      const books = JSON.parse(data);
      const newId = generateId();
  
      const newBook = { id: newId, ...book };
  
      books.push(newBook);
  
      fs.writeFileSync(filePath, JSON.stringify(books));
      return newBook;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  
  // Update a book with the specified ID in the JSON file
  function updateBookById(id, updatedBook) {

  }
  
  // Delete a book with the specified ID from the JSON file
  function deleteBookById(id) {

  }
  
  // Generate a new unique ID for a book
  function generateId() {
    return uuid.v1();
  }
  
  module.exports = {
    getAllBooks,
    getBookById,
    addBook,
    updateBookById,
    deleteBookById,
  };