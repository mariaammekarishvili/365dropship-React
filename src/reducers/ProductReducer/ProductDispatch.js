

export const getProductsAction = (data) => {
    return {
        type: 'PRODUCT_FETCH',
        payload: data
    }
}