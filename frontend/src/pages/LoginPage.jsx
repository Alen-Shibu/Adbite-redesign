import { useState } from 'react';
import axios from '../api/axios.js';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/LoginPage.module.css'

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading]   = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post('/auth/login', { username, password });
      toast.success("Login Success")
      navigate('/admin-panel');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles['login-page']}>
  <div className={styles['login-card']}>

    <div className={styles['login-header']}>
      <h1 className={styles['login-logo']}>
        Ad<span>bite</span>
      </h1>
      <p className={styles['login-subtitle']}>Admin Portal</p>
      <div className={styles['login-divider']} />
    </div>

    <form className={styles['login-form']} onSubmit={handleSubmit}>
      <div className={styles['form-group']}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

      <div className={styles['form-group']}>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button
        className={styles['login-btn']}
        type="submit"
        disabled={loading}
      >
        {loading ? 'Signing In...' : 'Sign In'}
      </button>
    </form>

  </div>
</div>
  );
};

export default LoginPage;