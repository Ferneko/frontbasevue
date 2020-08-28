import axios from 'axios'
const HTTP = axios.create({
  baseURL: 'https://localhost:44319/',
  headers: {
    'Authorization': 'Bearer '+localStorage.getItem("jwt")
  }
})

export default HTTP;