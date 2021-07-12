import {CART_FETCH} from "../Actions";

const initialState = {
    cartList: [],
}

export const GetCartReducer = (state = initialState, action) => {
    switch (action.type){
        case CART_FETCH :
            return{
                ...state,
                cartList: action.payload
            }
        default:
            return state;
    }

}