import React, { Component } from 'react'
import classes from './Cart.scss'

import Orders from './Orders/Orders'
import Summary from './Summary/Summary'

const Cart = class extends Component {

    state = {
        orders: [
            {
                title: 'Тестовый товар #1',
                img: 'https://github.com/Vlad-Shevliakov/Store/blob/master/src/assets/rastr/test-bag_1.jpg?raw=true', // t
                price: 2600,
                code: '0001'
            },
            {
                title: 'Тестовый товар #2',
                img: 'https://github.com/Vlad-Shevliakov/Store/blob/master/src/assets/rastr/test-bag_1.jpg?raw=true', // t
                price: 2600,
                code: '0002'
            }
        ]
    }

    render() {

        return (
            <div className={classes.Cart}>                
                <div className={classes.cart_container}>
                    <Orders
                        orders={this.state.orders}
                    />
                    <Summary />
                </div>
            </div>
        )

    }
}


export default Cart