import * as AT from '../actionType'


export const removeOrder = (code) => {
    return {
        type: AT.REMOVE_ITEM_FROM_CART,
        payload: code
    }
}


export const priceCalculation = amount => {
    console.log(amount)
    return {
        type: AT.CART_PRICE_CALCULATION,
        payload: amount
    }
}