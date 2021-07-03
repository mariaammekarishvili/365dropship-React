import {useEffect, useState} from "react";
import {cart } from "./API";
import CatalogItem from "./catalog/CatalogItem";
import {Grid, Hidden} from "@material-ui/core";
import Navigation from "./common/Navigation";
import AsideBar from "./asideBar/AsideBar";
import Box from "@material-ui/core/Box";

const Cart = () => {
    const [cartData, setCartData] = useState([])
    useEffect(() => {
        cart().then(result => {
            setCartData(result)
        })
    },)

    return(
        <div className={'cart--grid main'}>
            <Hidden xsDown><Navigation/></Hidden>
            <Hidden smDown><AsideBar/></Hidden>


         <Box p={3} minWidth={1500} minHeight={1200}>
            <Grid container
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                  wrap={"wrap"}
                  m={0}
                  spacing={2}  >

                <Grid item xs={12} sm={6} md={5} lg={4} xl={3}
                      wrap={"wrap"}
                      spacing={1}  >

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
                </Grid>
            </Grid>
         </Box>
        </div>
    )
}

export default Cart