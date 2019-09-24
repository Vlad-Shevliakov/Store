import * as AT from "../actionType"

export const removeOrder = code => {
    return {
        type: AT.REMOVE_ITEM_FROM_CART,
        payload: code
    }
}

export const addOrder = order => {
    return {
        type: AT.ADD_PRODUCT_TO_CART,
        payload: order
    }
}

export const priceCalculation = amount => {
    console.log(amount)
    return {
        type: AT.CART_PRICE_CALCULATION,
        payload: amount
    }
}
