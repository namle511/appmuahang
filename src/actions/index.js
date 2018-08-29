import  * as types from './../constants/ActionType';

export const actAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product: product,
        quantity: quantity
    }
}

export const changeQuan = (product, b) => {
    return {
        type: types.CHANGE_QUAN,
        product: product,
        b: b
    }
}

export const deleteCartItem = (product) => {
    return {
        type: types.DELETE_CART_ITEM,
        product: product,
    }
}

export const changeMsg = (msg) => {
    return {
        type: types.CHANGE_MSG,
        msg
    }
}