import {useDispatch} from "react-redux";
import {fetchFullInfoAction} from "./reducers/ProfileReducer/ProfileActions";


export const GoogleInfoRunReducer = () => {
    const dispatch = useDispatch()

    const user = JSON.parse((localStorage.getItem('user')))
    dispatch(fetchFullInfoAction({
            firstName: user.givenName,
            lastName: user.firstName,
            email: user.email,
            img: user.imageUrl
        }
    ))
}