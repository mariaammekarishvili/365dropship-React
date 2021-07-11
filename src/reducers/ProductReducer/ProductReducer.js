
const initialState = {
    productList: [],
    modalOpen: false
}

export const ProductReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'PRODUCT_FETCH':
            return {
                ...state,
                productList: action.payload
            }
        default:
            return state;
    }
}