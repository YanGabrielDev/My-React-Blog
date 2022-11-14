import axios, { AxiosInstance } from "axios"

const api: AxiosInstance = axios.create({
  baseURL: "https://picsum.photos/v2/list",
})

export default api
