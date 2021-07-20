import {CART_FETCH, CARTS_PRODUCTS_CHANGE} from "../ActionsTypes";

const initialState = {
    cartList: [],
    cartProductsPrice: 0,
    cartProductsNumb: 0
}

export const GetCartReducer = (state = initialState, action) => {
    switch (action.type){
        case CART_FETCH :
            return {
                ...state,
                cartList: action.payload
            }
        case  CARTS_PRODUCTS_CHANGE:
            return {
                ...state,
                cartProductsPrice: state.cartProductsPrice + action.payload
            }
        default:
            return state;
    }

}