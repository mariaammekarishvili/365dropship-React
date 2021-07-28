import {FETCH_ALL_USER} from "../ActionsTypes";


export const getAllUserInfoAction = (data) => {
    return {
        type: FETCH_ALL_USER,
        payload: data
    }
}