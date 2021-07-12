import {CART_FETCH} from "../Actions";

export const getCartAction = (data) => {
    return{
        type: CART_FETCH,
        payload: data
    }
}