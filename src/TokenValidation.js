import {useHistory} from "react-router-dom";

const token = localStorage.getItem('token')


export const TokenValidation = (url) => {
    if(token){
        useHistory().push()
    }

}