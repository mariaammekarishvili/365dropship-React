import {HISTORY_CHANGING, PRODUCT_FETCH} from "../Actions";

const initialState = {
    productList: [],
    modalOpen: false
}

export const ProductReducer = (state = initialState, action) => {
    switch(action.type) {
        case PRODUCT_FETCH:
            return {
                ...state,
                productList: action.payload
            }
        case HISTORY_CHANGING:
            return {
                ...state,
                productList: action.payload
            }
        default:
            return state;
    }
}