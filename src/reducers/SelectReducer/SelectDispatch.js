import {
    MARK_TYPE_CHANGE,
    PRODUCT_SELECTION,
    PRODUCT_SELECTION_ID,
    PRODUCT_SELECTION_QTY,
    PRODUCT_UNSELECTING_ID, UNSELECTING_ALL_ID
} from "../Actions";


export const selectAllAction = (data) => {
    return{
        type : MARK_TYPE_CHANGE,
        payload: data
    }
}

export const selectProductIdAction = (data) => {
    return{
        type : PRODUCT_SELECTION_ID,
        payload: data
    }
}

export const unselectProductIdAction = (data) => {
    return{
        type : PRODUCT_UNSELECTING_ID,
        payload: data
    }
}

export const selectProductQtyAction = (data) => {
    return{
        type : PRODUCT_SELECTION_QTY,
        payload: data
    }
}

export const unselectAllIdAction = (data) => {
    return{
        type : UNSELECTING_ALL_ID,
        payload: data
    }
}