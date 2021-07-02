import {Button} from "@material-ui/core";
import {useHistory} from "react-router-dom";

const LogOut = () => {
    const history = useHistory()

    const logOutAction = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        history.push('/login')
    }

    return(
        <Button size={"medium"} onClick={logOutAction} color={'default'}>Log Out</Button>
    )
}

export default LogOut