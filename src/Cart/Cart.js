import {useEffect, useState} from "react";
import {cart} from "../API/CartAPI";
import {Hidden,} from "@material-ui/core";
import Navigation from "../components/common/Navigation";
import AsideBar from "../asideBar/AsideBar";
import '../assets/CSS/AddProduct.css'
import {useDispatch, useSelector} from "react-redux";
import '../assets/CSS/cart.css'
import CartItem from "./CartItem";
import SearchBox from "../components/header/SearchBox";
import {getProductsAction} from "../reducers/ProductReducer/ProductActions";
import headerCart from '../assets/img/shopping-cart.png'

const Cart = () => {
    const products = useSelector( state => state.products.productList)
    const inputText = useSelector(state => state.products.inputText)
    const refresh = useSelector(state => state.products.needRefresh)
    const dispatch = useDispatch()


    useEffect( () => {
        cart().then(result => {
            let list = (result.cartItem.items.filter((value) => {
                return value.title.toLowerCase().includes(inputText.toLowerCase())
            }))
            dispatch(getProductsAction(list))
        })
    }, [inputText,refresh])


        return (
            <>
            <div className={'cart'}>
                <Hidden xsDown><Navigation/></Hidden>
                <Hidden smDown><AsideBar/></Hidden>

                <div className={'cart-item__box'}>
                    <div className={'card__header'}>
                        <div className={'cart__title'}>
                            <img className={'cart__title--icon'} src={headerCart}/>
                            <h2>SHOPPING CART ({products.length}) </h2>
                        </div>
                        <SearchBox/>
                    </div>
                        <table className={'table--width'}>
                            {products.length >= 0 && products.map(item =>
                                <CartItem key={item.id}
                                          title={item.title}
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