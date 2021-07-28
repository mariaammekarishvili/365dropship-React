import {useHistory} from "react-router-dom";

const token = localStorage.getItem('token')
const history = useHistory()

export const TokenValidation = (url) => {
    if(token){
        useHistory().push()
    }

}