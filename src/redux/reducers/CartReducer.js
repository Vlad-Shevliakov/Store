import * as AT from '../actionType'
import nid from 'nanoid'

const initialState = {
    amount: 0,
    orders: [
        {
            title: 'Тестовый товар #1',
            img: 'https://github.com/Vlad-Shevliakov/Store/blob/master/src/assets/rastr/test-bag_1.jpg?raw=true', // t
            price: 2600,
            code: nid(10)
        },
        {
            title: 'Тестовый товар #2',
            img: 'https://github.com/Vlad-Shevliakov/Store/blob/master/src/assets/rastr/test-bag_1.jpg?raw=true', // t
            price: 2600,
            code: nid(10)
        },
        {
            title: 'Тестовый товар #3',
            img: 'https://github.com/Vlad-Shevliakov/Store/blob/master/src/assets/rastr/test-bag_1.jpg?raw=true', // t
            price: 2900,
            code: nid(10)
        },
        {
            title: 'Тестовый товар #4',
            img: 'https://github.com/Vlad-Shevliakov/Store/blob/master/src/assets/rastr/test-bag_1.jpg?raw=true', // t
            price: 2200,
            code: nid(10)
        },
        {
            title: 'Тестовый товар #5',
            img: 'https://github.com/Vlad-Shevliakov/Store/blob/master/src/assets/rastr/test-bag_1.jpg?raw=true', // t
            price: 2290,
            code: nid(10)
        }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case AT.REMOVE_ITEM_FROM_CART:

            // Новый массив заменит старый, без удаленного элемента
            const arr = state.orders.filter(order => order.code !== action.payload)

            return {
                ...state,
                orders: arr
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