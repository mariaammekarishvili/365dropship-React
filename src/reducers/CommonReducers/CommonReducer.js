import {FAILED_REQUEST, HEADER_MODAL_RUN, RUN_LOADING, SUCCESS_REQUEST} from "../ActionsTypes";

const initialState = {
    successMessage : false,
    failedMessage : false,
    headerModalOpen: false,
    runLoading : false,
}

export const CommonReducer = (state = initialState, action) => {
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
        case HEADER_MODAL_RUN:
            return {
                ...state,
                headerModalOpen: action.payload
            }
        case RUN_LOADING:
            return {
                ...state,
                runLoading: action.payload
            }
        default:
            return state
    }
}
