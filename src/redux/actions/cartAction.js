import * as AT from "../actionType"


export const removeOrder = code => {
    return {
        type: AT.REMOVE_ITEM_FROM_CART,
        payload: code
    }
}

export const MakeOrder = order => {
    order.amount = 1
    return {
        type: AT.ADD_PRODUCT_TO_CART,
        payload: order
    }
}

const updateOrderAmount = index => {
    return {
        type: AT.CART_UPDATE_ORDER_AMOUNT,
        payload: index
    }
}

export const addOrder = order => (
    (dispatch, getState) => {
        const { cart } = getState()
        
        const indexOfIdentica = cart.orders.findIndex(product => product.code === order.code)

        // Просто зачем перезаписывать объкт?
        // Его нужно обновить
        if (indexOfIdentica !== -1) {
            dispatch(updateOrderAmount(indexOfIdentica))
        } else {
            dispatch(MakeOrder(order))
        }
    }
)


export const priceCalculation = amount => {
    console.log(amount)
    return {
        type: AT.CART_PRICE_CALCULATION,
        payload: amount
    }
}
