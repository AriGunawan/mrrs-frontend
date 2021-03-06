import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: process.env.BACKEND_URI || `http://localhost:8081`,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
}
