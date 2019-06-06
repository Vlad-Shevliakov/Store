import React from 'react'
import classes from './CartPreview.scss'

import Booking from './Booking/Booking'
import EmptyCart from './EmptyCart/EmptyCart'

const CartPreview = props => {

    const { cartItems } = props

    return (
        <div className={classes.container}>
            {
                !cartItems.length ? <EmptyCart /> : <Booking cartItems={cartItems} />
            }
        </div>
    )
}

export default CartPreview