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
            },
            {
                title: 'Тестовый товар #3',
                img: 'https://github.com/Vlad-Shevliakov/Store/blob/master/src/assets/rastr/test-bag_1.jpg?raw=true', // t
                price: 2900,
                code: '0003'
            }
        ]
    }

    removeItemHandler = id => {

        const orders = [...this.state.orders]

        const ind = orders.findIndex(el => el.code === id)

        orders.splice(ind, 1)

        this.setState({
            orders
        })
        
    }


    render() {

        return (
            <div className={classes.Cart}>                
                <div className={classes.cart_container}>
                    <Orders
                        orders={this.state.orders}
                        removeHandler={this.removeItemHandler}
                    />
                    <Summary />
                </div>
            </div>
        )

    }
}


export default Cart