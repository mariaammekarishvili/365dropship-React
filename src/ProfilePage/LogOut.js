import {useHistory} from "react-router-dom";
import '../CSS/Profile.css'

const LogOut = () => {
    const history = useHistory()

    const logOutAction = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        history.push('/')
    }

    return (
        <button size={"medium"}
                className={'logout__but '}
                onClick={logOutAction}
                color={'default'}>Log Out</button>
    )
}

export default LogOut