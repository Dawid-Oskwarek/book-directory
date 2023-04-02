import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navbar from './components/NavBar';
import BookTable from './components/BookTable';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';

function App() {


  return (
    <div className="container">
      <div className="App">
      <ToastContainer />
        <h1>Book Directory Application</h1>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<BookTable />}></Route> 
          <Route exact path='/add-book' element={<AddBook />}></Route>
          <Route exact path='/edit-book/:id' element={<EditBook />}></Route>  
        </Routes>
      </div>
    </div>
  );
}

export default App;
