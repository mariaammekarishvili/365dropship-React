import {HEADER_MODAL_RUN} from "../Actions";

export const headerModalOpenAction = (data) => {
    return{
        type: HEADER_MODAL_RUN,
        payload: data
    }
}