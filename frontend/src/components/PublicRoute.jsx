// components/PublicRoute.jsx
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from '../api/axios';

const PublicRoute = ({ children }) => {
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    axios.get('/auth/verify')
      .then(() => setStatus('auth'))    // has token → redirect away
      .catch(() => setStatus('unauth')); // no token → show the login page
  }, []);

  if (status === 'loading') return null;
  if (status === 'auth') return <Navigate to="/admin-panel" replace />;
  return children;
};

export default PublicRoute;