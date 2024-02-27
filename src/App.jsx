import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ShowBook from './pages/showBook.jsx';
import CreateBook from './pages/createBook.jsx';
import DeleteBook from './pages/deleteBook.jsx';
import EditBook from './pages/editBook.jsx';
import Home from './pages/home';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
    </Routes>
  )
}

export default App