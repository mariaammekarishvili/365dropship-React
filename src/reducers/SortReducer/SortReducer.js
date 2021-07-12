import {CHANGE_SORT_STATE, INPUT_SORT} from "../Actions";


const initialState = {
    inputText: '',
    sortState: 'default'
}

export const SortReducer = (state = initialState,action) => {
    switch (action.type){
        case INPUT_SORT:
            return{
                ...state,
                inputText: action.payload
            }
        case CHANGE_SORT_STATE:
            return {
                ...state,
                sortState: action.payload
            }
        default:
            return state
    }
}

console.log(initialState.inputText)