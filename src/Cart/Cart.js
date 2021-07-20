import {useEffect, useState} from "react";
import {cart} from "../API/CartAPI";
import {Hidden,} from "@material-ui/core";
import Navigation from "../common/Navigation";
import AsideBar from "../asideBar/AsideBar";
import '../CSS/AddProduct.css'
import {useDispatch, useSelector} from "react-redux";
import '../CSS/cart.css'
import CartItem from "./CartItem";
import SearchBox from "../header/SearchBox";
import {getProductsAction} from "../reducers/ProductReducer/ProductActions";

const Cart = () => {
    const products = useSelector( state => state.products.productList)
    const inputText = useSelector(state => state.products.inputText)
    const refresh = useSelector(state => state.products.needRefresh)
    const dispatch = useDispatch()
    const [list,setList] = useState([])


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
                        <h2>SHOPPING CART ({products.length}) </h2>
                        <SearchBox/>
                    </div>
                        <table className={'table--width'}>
                            {/*<div >*/}
                            {/*    <div className={'thead'}>*/}
                            {/*        <th className={'td'} scope="col">Picture</th>*/}
                            {/*        <th className={'td'} scope="col">Title</th>*/}
                            {/*        <th className={'td'} scope="col">Quantity</th>*/}
                            {/*        <th className={'td'} scope="col">Price</th>*/}
                            {/*        <th className={'td button-box'} scope="col"><div>          </div> </th>*/}


                            {/*    </div>*/}
                            {/*</div>*/}
                            {products.length >= 0 && products.map(item =>
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