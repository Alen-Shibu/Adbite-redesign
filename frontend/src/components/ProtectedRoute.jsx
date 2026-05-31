import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from '../api/axios';

const ProtectedRoute = ({ children }) => {
  const [status, setStatus] = useState('loading'); 

  useEffect(() => {
    axios.get('/auth/verify')
      .then(() =>{
         setStatus('auth');
      })
      .catch(() => setStatus('unauth'));
  }, []);

  if (status === 'loading') return null; // or a spinner
  if (status === 'unauth') return <Navigate to="/admin" replace />;
  return children;
};

export default ProtectedRoute;