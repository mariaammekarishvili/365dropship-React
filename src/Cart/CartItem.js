import {removeFromCart} from "../API";

const CartItem = ({title,qty,img,price,itemId}) => {

    return (
        <div className={'table__item'}>
            <div className={'td__img-box td'}><img src={img} className={'td__img'}/></div>
            <div className={'td__title td'}>{title}</div>
            <div className={'td__qty td'}>{qty}</div>
            <div className={'td__price td'}>{price * qty}</div>
            <div className={'td'}>
                <button onClick={() =>
                                    removeFromCart(itemId)}
                        className={'cart__butt--remove'}>Remove
                </button>
            </div>
        </div>
    )
}

export default CartItem