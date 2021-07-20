import {
    CHANGE_SORT_STATE,
    EDIT_PRODUCT,
    HISTORY_CHANGING,
    INPUT_SORT,
    MARK_TYPE_CHANGE,
    OPEN_MODAL,
    PRODUCT_FETCH,
    PRODUCT_SELECTION_QTY,
    REFRESH_STATE,
    SELECT_PRODUCT,
    SELECT_QTY,
    UNSELECT_ALL_PRODUCTS,
    UNSELECT_ID,
    UNSELECT_PRODUCT,

} from "../ActionsTypes";


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

export const selectAllAction = (data) => {
    return{
        type : MARK_TYPE_CHANGE,
        payload: data
    }
}

export const selectProductIdAction = (data) => {
    return{
        type : SELECT_PRODUCT,
        payload: data
    }
}

export const unselectProductIdAction = (data) => {
    return{
        type : UNSELECT_PRODUCT,
        payload: data
    }
}

export const selectProductQtyAction = (data) => {
    return{
        type : SELECT_QTY,
        payload: data
    }
}

export const unselectAllIdAction = (data) => {
    return {
        type: UNSELECT_ALL_PRODUCTS,
        payload: data
    }
}


export const inputSortAction = (data) => {
    return {
        type: INPUT_SORT,
        payload: data
    }
}

export const changeSortState = (data) => {
    return{
        type: CHANGE_SORT_STATE,
        payload: data
    }
}

export const editProductAction = (data) =>{
    return{
        type: EDIT_PRODUCT,
        payload: data
    }
}

export const openModalAction = (data) => {
    return{
        type: OPEN_MODAL,
        payload: data
    }
}

export const refreshStateAction = (data) => {
    return{
        type: REFRESH_STATE,
        payload: data
    }
}