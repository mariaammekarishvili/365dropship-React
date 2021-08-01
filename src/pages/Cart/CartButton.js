import {Button} from "@material-ui/core";
import {removeFromCart} from "../../API/CartAPI";
import { successMessageAction} from "../../reducers/CommonReducers/CommonAction";
import {useDispatch} from "react-redux";

const CartButton = ({info}) => {
    const dispatch = useDispatch()

        const apiRemove = (id) =>{
            removeFromCart(id).then(r => dispatch(successMessageAction(true)) )
        }



    return(
        <Button onClick={apiRemove({info})}
                color={'default'}>Remove
        </Button>
    )
}

export default CartButton