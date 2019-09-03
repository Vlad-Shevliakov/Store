import { combineReducers } from 'redux'

import HeaderReducer from './reducers/HeaderReducer'
import CartReducer from './reducers/CartReducer'
import HomeReducer from './reducers/HomeReducer'

export default combineReducers({
    head: HeaderReducer,
    cart: CartReducer,
    home: HomeReducer
})