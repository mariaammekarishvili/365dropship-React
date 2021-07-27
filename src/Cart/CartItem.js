import {removeFromCart, updateCart} from "../API/CartAPI";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {refreshStateAction} from "../reducers/ProductReducer/ProductActions";
import {successMessageAction} from "../reducers/CommonReducers/SnackbarActions";

const CartItem = ({title,qty,img,price,itemId}) => {
    const refresh = useSelector(state => state.products.needRefresh)
    const [newQty,setNewQty] = useState(qty)
    const [edit,setEdit] = useState(false)
    const dispatch = useDispatch()

    return (
        <div className={'table__item'} >
            <div className={'td__img-box td'}><img src={img} className={'td__img'}/></div>
            <div className={'td__title td'}>{title}</div>
            <div className={'qty cart__qty'}>
                <button className={'qty__plus'}
                        value={qty}
                        onClick={() =>
                            setNewQty(newQty+1)}> +
                </button>
                <div className={'qty__number'}>{newQty}</div>
                <button className={'qty__minus'}
                        onClick={() =>
                            setNewQty(newQty-1)}
                        value={qty}> -
                </button>
            </div>
            <div className={'td__price td'}>{price * qty} $</div>
            <div className={'td button-box'}>
                <button
                    onClick={() => {
                        updateCart(itemId, newQty).then(r =>
                            dispatch(refreshStateAction(!refresh)))
                        dispatch(successMessageAction(true))
                    }}
                        className={'button '}>Save changes
                </button>
                <button onClick={() =>{removeFromCart(itemId).then(r =>
                    dispatch(refreshStateAction(!refresh)))
                    dispatch(successMessageAction(true))}}
                        className={'button modal__butt--grey'}>Remove
                </button>
            </div>
        </div>
    )
}

export default CartItem