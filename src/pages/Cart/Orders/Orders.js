import React from "react"
import classes from "./Orders.scss"
import {TransitionGroup, CSSTransition} from "react-transition-group"
import OrderItem from "./OrderItem/OrderItem"
import cart from "./FadeTransition.scss"

const Orders = props => {
    // все из CartPreview.js
    const {orders, removeHandler} = props

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
            <TransitionGroup component="ul" className={classes.list}>
                {orders.map(order => {
                    return (
                        <CSSTransition
                            key={order.code}
                            timeout={500}
                            classNames={{
                                enter: cart["cart"],
                                enterActive: cart["cart-enter-active"],
                                exit: cart["cart-exit"],
                                exitActive: cart["cart-exit-active"]
                            }}
                        >
                            <OrderItem
                                key={order.code}
                                title={order.title}
                                image={order.img}
                                code={order.code}
                                price={order.price}
                                removeHandler={removeHandler}
                            />
                        </CSSTransition>
                    )
                })}
            </TransitionGroup>
        </div>
    )
}

export default Orders
