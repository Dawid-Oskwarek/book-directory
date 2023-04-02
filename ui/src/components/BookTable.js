import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BookTable() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:3001/books');
      setBooks(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Error fetching books");
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/books/${id}`);
      fetchBooks();
      toast.success("Book deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error("Error deleting book");
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
    <h2>View Books</h2>
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
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.name}</td>
            <td>{book.genre}</td>
            <td>
            <Link to={`/edit-book/${book.id}`}>
              <button className="btn-edit">
                <i className="fas fa-edit"></i>
              </button>
            </Link>
              <button className="btn-delete" onClick={() => deleteBook(book.id)}>
                <i className="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default BookTable;
