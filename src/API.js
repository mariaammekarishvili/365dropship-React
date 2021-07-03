import axios from "axios";
import Logo from "./common/Logo";

const SERVER_URL = 'http://18.185.148.165:3000/';
const SERVER_URL_V1 = SERVER_URL + 'api/v1/';

axios.interceptors.request.use( (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})


export const login = async (email, password) => {
    try{
        const result = await axios.post(SERVER_URL + 'login',{email, password})
        localStorage.setItem('user', JSON.stringify(result.data.data) )
        localStorage.setItem('token',(result.data.data.token) )

        console.log(result)
    }catch (err){
        throw new Error(err)
}}
export const signUp = async (firstName, lastName, email , password, passwordConfirmation) => {
    const result = await axios.post(SERVER_URL + 'register', {firstName, lastName, email , password, passwordConfirmation})
    console.log(result)
}

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
export const products = async () => {
    const result = await axios.get(SERVER_URL_V1 + 'products')
    return result.data.data
}

export const addToCart = async (productId, qty) => {
    const result = await axios.post(SERVER_URL_V1 + 'cart/add',
        {productId, qty})
    return result.data.data
}

export  const creatProduct = async (data) => {
    const result = await axios.post(SERVER_URL_V1 + 'products',
        {data})
    return result.data.data

}

export  const updateProduct = async(data,id) => {
    const result = await axios.put(SERVER_URL_V1 + `products/${id}` ,
        {data})

    console.log(data)
    return result.data.data
}

export const getProduct = async (id) => {
    const result = await axios.get(SERVER_URL_V1 +  `products/${id}`)
    return result.data.data
}