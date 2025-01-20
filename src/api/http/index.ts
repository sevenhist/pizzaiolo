import axios from "axios";

export const API_URL = 'https://pizza-backend-fp0r.onrender.com/api'
// export const API_URL = 'http://localhost:3002/api'
const $api = axios.create({
    baseURL: API_URL
})


export default $api;