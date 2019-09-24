import React from "react"
import classes from "./CartPreview.scss"
import {connect} from "react-redux"
import * as cart from "../../../../redux/actions/cartAction"
import Booking from "./Booking/Booking"
import EmptyCart from "./EmptyCart/EmptyCart"

const CartPreview = props => {
    const {cartItems, removeOrder} = props

    return (
        <div className={classes.container}>
            {!cartItems.length ? (
                <EmptyCart />
            ) : (
                <Booking removeOrder={removeOrder} cartItems={cartItems} />
            )}
        </div>
    )
}

const mapStateToProps = store => {
    return {
        cartItems: store.cart.orders
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeOrder: code => dispatch(cart.removeOrder(code))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartPreview)
