import type from "react";
import {FAILED_REQUEST, SUCCESS_REQUEST} from "../ActionsTypes";

export const successMessageAction = (data) => {
    return{
        type: SUCCESS_REQUEST,
        payload: data
    }
}

export const failedMessageAction = (data) => {
    return{
        type: FAILED_REQUEST,
        payload: data
    }
}