import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar';
import BookTable from './components/BookTable';
import AddBook from './components/AddBook';

function App() {


  return (
    <div className="container">
      <div className="App">
        <h1>Book Directory Application</h1>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<BookTable />}></Route> 
          <Route exact path='/add-book' element={<AddBook />}></Route> 
        </Routes>
      </div>
    </div>
  );
}

export default App;
