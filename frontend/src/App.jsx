import React from 'react'
import HomePage from './pages/HomePage'
import AdminPage from './pages/AdminPage'
import { Toaster } from 'react-hot-toast';
import LoginPage from './pages/LoginPage';
import { Routes, Route } from 'react-router-dom'

const App = () => {
  
  return (
    <>
      <Toaster/>
      <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/admin' element={<LoginPage />}/>
          <Route path='/admin-panel' element={<AdminPage />}/>
      </Routes>
    </>
  )
}

export default App
