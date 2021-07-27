import {FAILED_REQUEST, SUCCESS_REQUEST} from "../ActionsTypes";

const initialState = {
    successMessage : false,
    failedMessage : false,
}

export const SnackbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_REQUEST:
            return{
                ...state,
                successMessage: action.payload
            }
        case FAILED_REQUEST:
            return {
                ...state,
                failedMessage: action.payload
            }
        default:
            return state
    }
}

