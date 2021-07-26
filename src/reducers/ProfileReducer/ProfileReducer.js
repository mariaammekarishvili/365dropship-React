import {ADMIN_INFORMATION_FETCH, OPEN_PROFILE_EDIT_MODAL, USER_INFORMATION_FETCH} from "../ActionsTypes";
const id = JSON.parse((localStorage.getItem('user')))
const initialState = {
    isAdmin : false,
    id : 0,
    fullInformation: [],
    modalOpen: false,
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
        case OPEN_PROFILE_EDIT_MODAL:
            return {
                ...state,
                modalOpen: action.payload
            }

        default:
            return state;
    }
}