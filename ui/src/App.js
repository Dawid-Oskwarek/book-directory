import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';


function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:3001/books');
      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/books/${id}`);
      fetchBooks();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

    return (
      <div className="container">
        <div className="App">
          <h1>Book Directory Application</h1>
            <nav class="navbar">
             <div class="navbar-buttons">
              <button class="btn btn-primary">View Books</button>
              <button class="btn btn-secondary">Add Book</button>
             </div>
           </nav>
           <table className="book-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Genre</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.name}</td>
                <td>{book.genre}</td>
                <td>
                  <button className="btn-edit">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => deleteBook(book.id)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
      );
    }

export default App;