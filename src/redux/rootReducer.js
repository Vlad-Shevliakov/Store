import { combineReducers } from 'redux'

import HeaderReducer from './reducers/HeaderReducer'
import CartReducer from './reducers/CartReducer'

export default combineReducers({
    head: HeaderReducer,
    cart: CartReducer
})