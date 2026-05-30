import React from 'react'
import HomePage from './pages/HomePage'
import AdminPage from './pages/AdminPage'
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div>
      <div><Toaster/></div>
      <AdminPage/>
    </div>
  )
}

export default App
