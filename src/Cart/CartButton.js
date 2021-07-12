import {Button} from "@material-ui/core";
import {removeFromCart} from "../API";

const CartButton = ({info}) => {
    console.log(info)
        const apiRemove = (id) =>{
            removeFromCart(id)
            console.log(id)
        }


    return(
        <Button onClick={apiRemove({info})}
                color={'default'}>Remove</Button>
    )
}

export default CartButton