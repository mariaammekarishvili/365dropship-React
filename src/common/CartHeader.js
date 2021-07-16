// import {useSelector} from "react-redux";
// import {useEffect, useState} from "react";
//
// const CartHeader = () => {
//     const cartList = useSelector(state => state.getCart.cartList)
//     const totalPrice = useSelector(state => state.getCart.cartProductsPrice)
//
//     // const [price, setPrice] = useState(0)
//     // const [numbOfSelect,setNumbOfSlect] = useState(0)
//     //
//     // // useEffect(() => {
//     // //     if(cartList.cartItem) {
//     //         cartList.cartItem.items.map(item => {
//     //             setPrice(price + item.price)
//     //             setNumbOfSlect(cartList.cartItem.items.length)
//     //         })
//     //     }
//     // },[])
//     //
//     // if(cartList){
//     //     console.log(cartList.cartItem.items)
//     // }
//
//     return(
//         <div className={'cart-header'}>
//             <p> selected: {totalPrice} product</p>
//             <p>total price : {totalPrice}</p>
//          </div>
//
//     )
// }
//
// export default CartHeader