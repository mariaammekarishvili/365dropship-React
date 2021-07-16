import {ADMIN_INFORMATION_FETCH} from "../Actions";


export const adminInformationAction = (data) => {
    return{
        type: ADMIN_INFORMATION_FETCH,
        payload: data
    }
}