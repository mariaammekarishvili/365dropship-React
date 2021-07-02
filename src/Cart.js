import {useEffect, useState} from "react";
import {cart } from "./API";
import CatalogItem from "./catalog/CatalogItem";
import {Grid, Hidden} from "@material-ui/core";
import Navigation from "./common/Navigation";
import AsideBar from "./asideBar/AsideBar";

const Cart = () => {
    const [cartData, setCartData] = useState([])
    useEffect(() => {
        cart().then(result => {
            setCartData(result)
        })
    },[])

    return(
        <div className={'cart--grid'}>
            <Hidden xsDown><Navigation/></Hidden>
            <Hidden smDown><AsideBar/></Hidden>
            <Grid container
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                  wrap={"wrap"}
                  m={0}
                  spacing={2}  >
                {cartData.cartItem && cartData.cartItem.items.map(item =>
                    <CatalogItem
                        title={item.title}
                        key = {item.id}
                        img={item.imageUrl} price={item.price}
                        description={item.description}
                        id={item.id}
                    />
                )}
            </Grid>
        </div>
    )
}

export default Cart