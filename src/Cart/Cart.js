import {useEffect, useState} from "react";
import {cart } from "../API";
import {Hidden,} from "@material-ui/core";
import Navigation from "../common/Navigation";
import AsideBar from "../asideBar/AsideBar";
import '../CSS/AddProduct.css'
import {removeFromCart} from '../API'
import {useDispatch, useSelector} from "react-redux";
import {getCartAction} from "../reducers/CartReducer/CartDispatch";
import '../CSS/cart.css'
import CartButton from "./CartButton";
import CartItem from "./CartItem";

const Cart = () => {
    const cartList = useSelector(state => state.getCart.cartList)
    const dispatch = useDispatch()



    useEffect(() => {
        cart().then(result => {
            dispatch(getCartAction(result))
        })
    },[cartList])

        return (
            <>
            <div className={'cart'}>
                <Hidden xsDown><Navigation/></Hidden>
                <Hidden smDown><AsideBar/></Hidden>

                <div className={'cart-item__box'}>
                        <table>
                            <div >
                                <div className={'thead'}>
                                    <th className={'td'} scope="col">Picture</th>
                                    <th className={'td'} scope="col">Title</th>
                                    <th className={'td'} scope="col">Quantity</th>
                                    <th className={'td'} scope="col">Price</th>
                                    <td> </td>
                                </div>
                            </div>
                            {cartList.cartItem && cartList.cartItem.items.map(item =>
                                <CartItem title={item.title}
                                          img={item.image}
                                          qty={item.qty}
                                          price={item.price}
                                          itemId={item.id}/>
                            )}
                        </table>
                </div>

            </div>
            </>
        )
    }
export default Cart