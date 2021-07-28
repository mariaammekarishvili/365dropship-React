import axios from "axios";
import {SERVER_URL} from "./URL";

axios.interceptors.request.use( (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

export const login = async (email, password) => {
    try{
        const result = await axios.post(SERVER_URL + 'login',{email, password})
        localStorage.setItem('user', JSON.stringify(result.data.data) )
        localStorage.setItem('token',(result.data.data.token) )
    }catch (err){
        throw new Error(err)
    }}

export const signUp = async (data) => {
    const result = await axios.post(SERVER_URL + 'register', data)
    console.log(result)
}