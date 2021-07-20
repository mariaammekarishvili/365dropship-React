import {CART_FETCH, CARTS_PRODUCTS_CHANGE} from "../ActionsTypes";

export const getCartAction = (data) => {
    return{
        type: CART_FETCH,
        payload: data
    }

}

export const changCatProducts = (data) => {
    return{
        type: CARTS_PRODUCTS_CHANGE,
        payload: data
    }
}