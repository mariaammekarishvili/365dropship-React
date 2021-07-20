import {Button} from "@material-ui/core";
import {removeFromCart} from "../API/CartAPI";

const CartButton = ({info}) => {
    console.log(info)
        const apiRemove = (id) =>{
            removeFromCart(id).then(r => alert )
        }


    return(
        <Button onClick={apiRemove({info})}
                color={'default'}>Remove</Button>
    )
}

export default CartButton