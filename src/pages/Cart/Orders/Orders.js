import React from 'react'
import classes from './Orders.scss'

import OrderItem from './OrderItem/OrderItem'

const Orders = props => {

    const { 
        orders,
        removeHandler
    } = props

    return (
        <div className={classes.Orders}>
            <h2 className={classes.title}>Ваши товары: ({orders.length})</h2>
            <ul className={classes.labels}>
                <li className={classes._first}>
                    <span>Товар</span>
                </li>
                <li>Цена</li>
                <li>Количество</li>
                <li>Общая цена</li>
            </ul>
            <ul className={classes.list}>
                {
                    orders.map((order, ind) => {
                        return (
                            <OrderItem
                                key={ind}
                                title={order.title}
                                image={order.img}
                                code={order.code}
                                price={order.price}
                                removeHandler={removeHandler}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )

}

export default Orders