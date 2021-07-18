import {HISTORY_CHANGING, PRODUCT_FETCH} from "../Actions";


export const getProductsAction = (data) => {
    return {
        type: PRODUCT_FETCH,
        payload: data
    }
}

export const clearProductsAction = (data) => {
    return{
        type: HISTORY_CHANGING,
        payload: data

    }
}