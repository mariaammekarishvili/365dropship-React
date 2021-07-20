import axios from "axios";
import {SERVER_URL_V1} from "./URL";

axios.interceptors.request.use( (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

export const products = async () => {
    const result = await axios.get(SERVER_URL_V1 + 'products')
    return result.data.data
}
export const getProduct = async (id) => {
    const result = await axios.get(SERVER_URL_V1 +  `products/${id}`)
    return result.data.data
}

export  const updateProduct = async(id,data) => {
    const result = await axios.put(SERVER_URL_V1 + `products/${id}` ,data)
    return result.data.data
}

export  const creatProduct = async (data) => {
    const result = await axios.post(SERVER_URL_V1 + 'products',
        data)
    return result.data.data

}

export const deleteProduct = async (productId) => {
    const result = await axios.delete(SERVER_URL_V1 + `products/${productId}`)
    return result.data.data
}