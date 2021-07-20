import axios from "axios";
import {SERVER_URL_V1} from "./URL";

axios.interceptors.request.use( (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

export const getUserInformation = async (id) => {
    const result = await axios.get(SERVER_URL_V1 + `users/${id}`)
    return result.data.data
}