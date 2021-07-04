import {useEffect, useState} from "react";
import {cart } from "./API";
import CatalogItem from "./catalog/CatalogItem";
import {Grid, Hidden} from "@material-ui/core";
import Navigation from "./common/Navigation";
import AsideBar from "./asideBar/AsideBar";
import './CSS/AddProduct.css'
import {removeFromCart} from './API'

const Cart = () => {
    const [cartData, setCartData] = useState([])

    useEffect(() => {
        cart().then(result => {
            setCartData(result)
        })
    },[removeFromCart()])

    return(
        <div className={'cart'}>
            <Hidden xsDown><Navigation/></Hidden>
            <Hidden smDown><AsideBar/></Hidden>

          <div className={'cart--flex'}>
                    {cartData.cartItem && cartData.cartItem.items.map(item =>
                        <CatalogItem
                            title={item.title}
                            key = {item.id}
                            img={item.image} price={item.price}
                            description={item.description}
                            id={item.id}
                            getQtyNumb = {item.qty}
                        />
                    )}
              </div>
        </div>
    )
}

export default Cart