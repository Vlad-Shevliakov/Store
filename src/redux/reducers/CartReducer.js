import * as AT from "../actionType"


const initialState = {
    amount: 0,
    orders: []
    // orders: [{
    //     title: 'Cotton Out Edition',
    //     img: 'https://github.com/Vlad-Shevliakov/Store/blob/master/src/assets/rastr/test-bag_1.jpg?raw=true', // t
    //     price: 1290,
    //     amount: 1 // default
    //     code: nid(10)
    // }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case AT.REMOVE_ITEM_FROM_CART:
            // Новый массив заменит старый, без удаленного элемента
            const arr = state.orders.filter(
                order => order.code !== action.payload
            )

            return {
                ...state,
                orders: arr
            }
        case AT.ADD_PRODUCT_TO_CART:
            const arrWithNewOrder = [...state.orders, {...action.payload}]
            return {
                ...state,
                orders: arrWithNewOrder
            }
        case AT.CART_UPDATE_ORDER_AMOUNT:
            const updateOrder = [...state.orders]
            updateOrder[action.payload].amount++
            return {
                ...state,
                orders: updateOrder
            }
        case AT.CART_PRICE_CALCULATION:
            return {
                ...state,
                amount: action.payload
            }
        default:
            return state
    }
}
