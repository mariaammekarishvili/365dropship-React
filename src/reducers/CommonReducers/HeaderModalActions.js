import {HEADER_MODAL_RUN} from "../ActionsTypes";

export const headerModalOpenAction = (data) => {
    return{
        type: HEADER_MODAL_RUN,
        payload: data
    }
}