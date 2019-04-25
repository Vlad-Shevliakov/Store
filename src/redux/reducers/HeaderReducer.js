import * as AT from '../actionType'

const initialState = {
    showDrawer: true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case AT.DRAWER_SWITCH:
            return {
                ...state,
                showDrawer: !state.showDrawer
            }          
        default:
            return state
    }
}