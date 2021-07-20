import {ADMIN_INFORMATION_FETCH, USER_INFORMATION_FETCH} from "../ActionsTypes";

const initialState = {
    isAdmin : false,
    id : 1,
    fullInformation: [],
}

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADMIN_INFORMATION_FETCH :
            return{
                ...state,
                isAdmin: action.secondPayload,
                id : action.firstPayload
            }
        case USER_INFORMATION_FETCH:
            return {
                ...state,
                fullInformation: action.payload
            }
        default:
            return state;
    }
}