import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-buttons">
        <Link to="/" className="btn btn-primary">View Books</Link>
        <Link to="/add-book" className="btn btn-secondary">Add Book</Link>
      </div>
    </nav>
  );
}

export default Navbar;
