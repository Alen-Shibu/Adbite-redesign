import React from 'react'
import HomePage from './pages/HomePage'
import AdminPage from './pages/AdminPage'
import { Toaster } from 'react-hot-toast';
import LoginPage from './pages/LoginPage';
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';

const App = () => {
  
  return (
    <>
      <Toaster/>
      <Routes>
          <Route path='/' element={<HomePage />}/>
          
          <Route path='/admin' element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>}/>

          <Route path='/admin-panel' element={
            <ProtectedRoute>
              <AdminPage/>
            </ProtectedRoute>}/>
      </Routes>
    </>
  )
}

export default App
