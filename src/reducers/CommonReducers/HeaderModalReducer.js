import {HEADER_MODAL_RUN} from "../ActionsTypes";

const initialState = {
    headerModalOpen: false,
}

export const HeaderModalReducer = (state = initialState, action) => {
    switch (action.type){
        case HEADER_MODAL_RUN:
            return {
                ...state,
                headerModalOpen: action.payload
            }
        default:
            return state;
    }
}