import type from "react";
import {FAILED_REQUEST, HEADER_MODAL_RUN, OPEN_SIMPLE_MODAL, RUN_LOADING, SUCCESS_REQUEST} from "../ActionsTypes";

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

export const headerModalOpenAction = (data) => {
    return{
        type: HEADER_MODAL_RUN,
        payload: data
    }
}

export const runLoadingAction = (data) => {
    return{
        type: RUN_LOADING,
        payload: data
    }
}

export const openSimpleModalAction = (data) => {
    return{
        type: OPEN_SIMPLE_MODAL,
        payload: data
    }
}