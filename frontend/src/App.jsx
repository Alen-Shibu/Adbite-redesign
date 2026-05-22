import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/shared/ProtectedRoute'
import HomePage       from './pages/HomePage'
import LoginPage      from './pages/admin/LoginPage'
import DashboardPage  from './pages/admin/DashboardPage'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/"                  element={<HomePage />} />
          <Route path="/admin"             element={<Navigate to="/admin/login" replace />} />
          <Route path="/admin/login"       element={<LoginPage />} />
          <Route path="/admin/dashboard"   element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
