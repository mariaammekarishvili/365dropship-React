import {
    CHANGE_SORT_STATE, EDIT_PRODUCT,
    HISTORY_CHANGING, INPUT_SORT,
    MARK_TYPE_CHANGE,
    PRODUCT_FETCH, REFRESH_STATE,
    SELECT_PRODUCT, SELECT_QTY,
    UNSELECT_ALL_PRODUCTS,
    UNSELECT_PRODUCT,
} from "../ActionsTypes";

const initialState = {
    productList: [],
    modalOpen: false,
    selectType : '',
    selectedId: [],
    selectedQty: [],
    inputText: '',
    sortState: 'default',
    editProductMode: false,
    productModal: false,
    needRefresh: false,
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

        case MARK_TYPE_CHANGE:
                return{
                    ...state,
                    selectType: action.payload

                }
        case SELECT_PRODUCT:
                return {
                    ...state,
                    selectedId: ([...state.selectedId,action.payload])
                }
        case UNSELECT_PRODUCT:
                return {
                    ...state,
                    selectedId: state.selectedId.filter((i) => i !== action.payload),
                };

        case UNSELECT_ALL_PRODUCTS:
                return {
                    ...state,
                    selectedId: action.payload,
                    selectedQty: action.payload
                }

        case SELECT_QTY:
                return {
                    ...state,
                    selectedQty: state.selectedQty.concat([action.payload])
                }
        case INPUT_SORT:
            return{
                ...state,
                inputText: action.payload
            }
        case CHANGE_SORT_STATE:
            return {
                ...state,
                sortState: action.payload
            }
        case EDIT_PRODUCT:
            return {
                ...state,
                editProductMode: action.payload
            }
        case REFRESH_STATE:
            return {
                ...state,
                needRefresh: action.payload
            }
        default:
            return state
    }
}