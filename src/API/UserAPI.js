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
export const editUserInformation = async (id,firstName,lastName,email,password) => {
    const res = await axios.put(SERVER_URL_V1 + `users/${id}`,{firstName,lastName,email,password})
    return res.data.data
}
export const getAllUser = async () => {
    const res = await axios.get(SERVER_URL_V1 + 'users')
    return res.data.data
}