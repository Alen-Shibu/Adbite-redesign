import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  withCredentials: true, // sends the httpOnly cookie automatically
})

export const loginAdmin  = (data) => api.post('/auth/login', data)
export const logoutAdmin = ()     => api.post('/auth/logout')  // add this route in backend if needed
