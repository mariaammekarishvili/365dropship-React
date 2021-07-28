import {FETCH_ALL_USER} from "../ActionsTypes";

const initialState = {
    allUserInfo: []
}


export const UserReducer = async (state = initialState, action ) => {
    switch (action.type){
        case FETCH_ALL_USER:
            return{
                ...state,
                allUserInfo : action.payload
            }

        default:
            return state
    }
}