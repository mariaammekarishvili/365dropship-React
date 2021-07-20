import axios from "axios";
import {SERVER_URL_V1} from "./URL";

axios.interceptors.request.use( (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

export const cart = async() => {
    try {
        const result = await axios.get(SERVER_URL_V1 + 'cart')
        return result.data.data
    }catch (err) {
        if(err.response.status ===401 ){
            localStorage.removeItem('user')
            localStorage.removeItem('token')
            window.location.href = '/login'
        }
    }
}

export const removeFromCart = async (productId) => {
    const result = await axios.post(SERVER_URL_V1 + `cart/remove/${productId}`)
    return result.data.data
}

export const addToCart = async (productId, qty) => {
    const result = await axios.post(SERVER_URL_V1 + 'cart/add',
        {productId, qty})
    return result.data.data
}