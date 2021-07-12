import {CHANGE_SORT_STATE, INPUT_SORT} from "../Actions";

export const inputSortAction = (data) => {
    return {
        type: INPUT_SORT,
        payload: data
    }
}

export const changeSortState = (data) => {
    return{
        type: CHANGE_SORT_STATE,
        payload: data
    }
}