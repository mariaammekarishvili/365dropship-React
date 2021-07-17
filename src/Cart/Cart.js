import {useEffect, useState} from "react";
import {cart, products as productsData} from "../API";
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
import CartHeader from "../common/CartHeader";
import SearchBox from "../header/SearchBox";
import {sortType} from "../SortForReducer";
import {getProductsAction} from "../reducers/ProductReducer/ProductDispatch";
import {GetCartReducer} from "../reducers/CartReducer/GetCartReducer";

const Cart = () => {
    const cartList = useSelector( state => state.GetCartReducer.cartList)
    const inputText = useSelector(state => state.inputSort.inputText)
    const sortState = useSelector(state => state.inputSort.sortState)
    const dispatch = useDispatch()
    const [list,setList] = useState([])

    useEffect(() => {
        setList(sortType(cartList.filter((value) => {
                return value.title.toLowerCase().includes(inputText.toLowerCase())
            }), sortState))
        },[list])


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
                    <div className={'card__header'}>
                        <h2>SHOPPING CART </h2>
                        <SearchBox/>
                    </div>
                        <table className={'table--width'}>
                            <div >
                                <div className={'thead'}>
                                    <th className={'td'} scope="col">Picture</th>
                                    <th className={'td'} scope="col">Title</th>
                                    <th className={'td'} scope="col">Quantity</th>
                                    <th className={'td'} scope="col">Price</th>

                                </div>
                            </div>
                            {cartList.cartItem && list.cartItem.items.map(item =>
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