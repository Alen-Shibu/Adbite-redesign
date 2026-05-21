import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  withCredentials: true, // cookie is sent automatically — no manual auth header needed
})

export const getLocations    = ()           => api.get('/locations')
export const createLocation  = (data)       => api.post('/locations', data)
export const updateLocation  = (id, data)   => api.put(`/locations/${id}`, data)
export const deleteLocation  = (id)         => api.delete(`/locations/${id}`)
