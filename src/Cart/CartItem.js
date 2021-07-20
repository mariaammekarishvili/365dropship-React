import {removeFromCart} from "../API/CartAPI";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {refreshStateAction} from "../reducers/ProductReducer/ProductActions";

const CartItem = ({title,qty,img,price,itemId}) => {
    const refresh = useSelector(state => state.products.needRefresh)
    const [newQty,setNewQty] = useState(qty)
    const [edit,setEdit] = useState(false)
    const dispatch = useDispatch()

    const qtyPlus = (e) => {
        setNewQty(e.target.value + 1)
    }
    const qtyMinus = (e) => {
        setNewQty(e.target.value - 1)
    }

    const buttonChange = () => {
        setEdit(!edit)
    }
    return (
        <div className={'table__item'} >
            <div className={'td__img-box td'}><img src={img} className={'td__img'}/></div>
            <div className={'td__title td'}>{title}</div>
            {/*<div className={'td__qty td'}>{qty}</div>*/}
            <div className={'qty cart__qty'}>
                <button className={'qty__plus'}
                        value={qty}
                        onClick={() =>
                            setNewQty(newQty+1)}> +
                </button>
                <div className={'qty__number'}>{newQty}</div>
                <button className={'qty__minus'}
                        onClick={() =>
                            setNewQty(newQty > 1 ?  newQty-1 : 1)}
                        value={qty}> -
                </button>
            </div>
            <div className={'td__price td'}>{price * qty} $</div>
            <div className={'td'}>
                <button onClick={buttonChange}
                        className={'button '}>{edit ? 'Save' :'Edit'}
                </button>
                <button onClick={() =>{removeFromCart(itemId).then(r =>
                    dispatch(refreshStateAction(!refresh)))}}
                        className={'button modal__butt--grey'}>Remove
                </button>
            </div>
        </div>
    )
}

export default CartItem