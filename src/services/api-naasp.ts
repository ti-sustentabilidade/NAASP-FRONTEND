import axios from "axios"

const NAASP_API = axios.create({
  baseURL: `${import.meta.env.VITE_ENV_NAASP_BACKEND_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "json",
})

export default NAASP_API
