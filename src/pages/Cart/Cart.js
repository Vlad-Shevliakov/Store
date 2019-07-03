import React, { Component } from 'react'
import classes from './Cart.scss'

import Orders from './Orders/Orders'
import Summary from './Summary/Summary'

const Cart = class extends Component {

    render() {
        return (
            <div className={classes.Cart}>
                
                <div className={classes.cart_container}>
                    <Orders />
                    <Summary />
                </div>
            </div>
        )
    }
}


export default Cart