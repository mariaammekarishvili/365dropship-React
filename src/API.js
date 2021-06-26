import axios from "axios";

const SERVER_URL = 'http://18.185.148.165:3000/';
const SERVER_URL_V1 = SERVER_URL + 'api/v1/';

export const login = async (email, password) => {
    const result = await axios.post(SERVER_URL + 'login',{email, password})
    console.log(result)
}