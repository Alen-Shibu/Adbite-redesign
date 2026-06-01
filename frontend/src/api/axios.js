import axios from 'axios'

const api = axios.create({
    baseURL: "https://adbite-redesign.onrender.com/api",
    withCredentials: true
})

export default api;