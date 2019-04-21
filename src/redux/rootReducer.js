import { combineReducers } from 'redux'

import HeaderReducer from './reducers/HeaderReducer'

export default combineReducers({
    head: HeaderReducer
})