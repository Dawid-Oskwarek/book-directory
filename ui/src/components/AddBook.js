import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function AddBook() {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');

  const handleAddBook = async () => {
    try {
      await axios.post('http://localhost:3001/books', { name, genre });
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      <h2>Add Book</h2>
      <div>
        <label className="add-book-label">Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label className="add-book-label">Genre:</label>
        <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
      </div>
      <div className="navbar-buttons">
        <Link to="/" className="btn-form btn-primary" onClick={handleAddBook}>Add</Link>
        <Link to="/" className="btn-form btn-secondary">Cancel</Link>
      </div>
    </div>
  );
}

export default AddBook;
