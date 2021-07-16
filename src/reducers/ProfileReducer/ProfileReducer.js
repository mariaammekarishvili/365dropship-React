import {ADMIN_INFORMATION_FETCH} from "../Actions";

const initialState = {
    isAdmin : false
}

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADMIN_INFORMATION_FETCH :
            return{
                ...state,
                isAdmin: action.payload
            }
        default:
            return state;
    }
}