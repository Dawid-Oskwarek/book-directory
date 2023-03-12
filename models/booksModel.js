const fs = require('fs');
const uuid = require('uuid');

const filePath = 'data/books.json';

// Read all books from the JSON file
function getAllBooks() {
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
}
  
// Read a single book with the specified ID from the JSON file
function getBookById(id) {
  const data = fs.readFileSync(filePath, 'utf8');
  const books = JSON.parse(data);
  const book = books.find(book => book.id === String(id));
  return book;
}
  
// Add a new book to the JSON file
function addBook(book) {
  const data = fs.readFileSync(filePath, 'utf8');
  const books = JSON.parse(data);
  const newId = generateId();
  
  const newBook = { id: newId, ...book };
  
  books.push(newBook);
  
  fs.writeFileSync(filePath, JSON.stringify(books));
  return newBook;
}
  
// Update a book with the specified ID in the JSON file
function updateBookById(id, updatedBook) {
  const books = getAllBooks();
  const index = books.findIndex((book) => book.id === id);
  if (index !== -1) {
    books[index] = { id, ...updatedBook };
    fs.writeFileSync(filePath, JSON.stringify(books));
    return books[index];
  }
  return false;
}

// Delete a book with the specified ID from the JSON file
function deleteBookById(id) {
  const books = getAllBooks();
  const index = books.findIndex(book => book.id === id);
  if (index === -1) {
    return false;
  }
  books.splice(index, 1);
  fs.writeFileSync(filePath, JSON.stringify(books));
  return true;
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