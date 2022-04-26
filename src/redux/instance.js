import axios from 'axios'

// api base url
export const API_BASE_URL = "http://161.97.147.182:3005/";

const instance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    mode: 'no-cors'
  }
})

export default instance
