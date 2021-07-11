import {useEffect, useState} from "react";
import {cart } from "./API";
import CatalogItem from "./catalog/CatalogItem";
import {Hidden,} from "@material-ui/core";
import Navigation from "./common/Navigation";
import AsideBar from "./asideBar/AsideBar";
import './CSS/AddProduct.css'
import {removeFromCart} from './API'
import {useDispatch, useSelector} from "react-redux";
import {getCartAction} from "./reducers/CartReducer/CartDispatch";
import './CSS/cart.css'
import CartItem from "./CartItem";

const Cart = () => {
    const cartList = useSelector(state => state.getCart.cartList)
    const dispatch = useDispatch()



    useEffect(() => {
        cart().then(result => {
            dispatch(getCartAction(result))
        })
    },[])


    console.log(cartList)

        return (
<>
            <div className={'cart'}>
                <Hidden xsDown><Navigation/></Hidden>
                <Hidden smDown><AsideBar/></Hidden>

                <div className={'cart-item__box'}>
                        <table>
                            <thead >
                                <tr className={'thead'}>
                                    <th scope="col">Picture</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                    <td> </td>
                                </tr>
                            </thead>
                            {cartList.cartItem && cartList.cartItem.items.map(item =>
                                <tbody className={'table__item'}>
                                <tr>
                                    <th scope="row" className={'td__img-box'}><img className={'td__img'} src={item.image}/></th>
                                    <td className={'td__title'}>{item.title}</td>
                                    <td className={'td__qty'}>{item.qty}</td>
                                    <td className={'td__price'}>{item.price * item.qty}</td>
                                    <td><button >REMOVE</button></td>
                                </tr>
                                </tbody>
                            )}
                        </table>
                </div>

                {/*<div className={'cart--flex'}>*/}
                {/*    {cartList.cartItem && cartList.cartItem.items.map(item =>*/}
                {/*        <CatalogItem*/}
                {/*            title={item.title}*/}
                {/*            key={item.id}*/}
                {/*            img={item.image} price={item.price}*/}
                {/*            description={item.description}*/}
                {/*            id={item.id}*/}
                {/*            getQtyNumb={item.qty}*/}
                {/*        />*/}
                {/*    )}*/}
  {/*</div>*/}
            </div>
</>
        )
    }
export default Cart