import {ADMIN_INFORMATION_FETCH, USER_INFORMATION_FETCH} from "../ActionsTypes";
import type from "react";


export const adminInformationAction = (data) => {
    return{
        type: ADMIN_INFORMATION_FETCH,
        firstPayload: data.id,
        secondPayload: data.isAdmin
    }
}

export const fetchFullInfoAction = (data) => {
    return{
        type: USER_INFORMATION_FETCH,
        payload: data
    }
}