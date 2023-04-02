import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditBook() {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');

  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/books/${id}`);
        const book = response.data;
        setName(book.name);
        setGenre(book.genre);
      } catch (error) {
        console.log(error);
        toast.error(`Error fetching book with ID: ${id}`);
      }
    };
    fetchBook();
  }, [id]);

  const handleEditBook = async () => {
    try {
      await axios.put(`http://localhost:3001/books/${id}`, { name, genre });
      toast.success("Book updated successfully");
    } catch (error) {
      console.log(error);
      toast.error("Error updating book");
    }
  };

  return (
    <div>
      <h2>Edit Book</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Genre:</label>
        <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
      </div>
      <div className="navbar-buttons">
        <Link to="/" className="btn-form btn-primary" onClick={handleEditBook}>Update</Link>
        <Link to="/" className="btn-form btn-secondary">Cancel</Link>
      </div>
    </div>
  );
}

export default EditBook;
