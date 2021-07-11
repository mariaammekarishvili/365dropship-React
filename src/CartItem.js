import './CSS/cart.css'
import {removeFromCart} from "./API";
import './CSS/cart.css'

const CartItem = ({id,title,price,qty,img}) => {
    const apiRemove = (id) =>{
        removeFromCart(id)
    }

    return(

<div></div>
    )
}

export default CartItem