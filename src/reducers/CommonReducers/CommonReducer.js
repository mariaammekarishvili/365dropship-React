import {FAILED_REQUEST, HEADER_MODAL_RUN, SUCCESS_REQUEST} from "../ActionsTypes";

const initialState = {
    successMessage : false,
    failedMessage : false,
    headerModalOpen: false,

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
        default:
            return state
    }
}
