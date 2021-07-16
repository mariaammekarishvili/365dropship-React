import {
    MARK_TYPE_CHANGE,
    PRODUCT_SELECTION_ID,
    PRODUCT_SELECTION_QTY,
    PRODUCT_UNSELECTING_ID, UNSELECTING_ALL_ID
} from "../Actions";

const initialState = {
    selectType : '',
    selectedId: [],
    selectedQty: [],
}

export const SelectReducer = (state = initialState, action) => {
    switch (action.type) {
        case MARK_TYPE_CHANGE:
            return{
                ...state,
                selectType: action.payload

            }
        case PRODUCT_SELECTION_ID:
            return {
                ...state,
                selectedId: ([...state.selectedId,action.payload])
            }
        case PRODUCT_UNSELECTING_ID:

            let index = state.selectedId.indexOf(action.payload);
            if (index > -1) {
                state.selectedId.splice(index, 1)
                state.selectedQty.splice(index, 1)
            }

        case UNSELECTING_ALL_ID:
            return {
                ...state,
                selectedId: action.payload,
                selectedQty: action.payload
            }

        case PRODUCT_SELECTION_QTY:
            return {
                ...state,
                selectedQty: state.selectedQty.concat([action.payload])
            }

        default:
                return state

    }
}