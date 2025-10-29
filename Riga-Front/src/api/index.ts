import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:5174/api/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
  withCredentials: true,
})

export default api
