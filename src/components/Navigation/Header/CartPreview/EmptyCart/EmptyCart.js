import React from 'react'
import classes from './EmptyCart.scss'

import Empty from '../../../../../assets/vector/shop-cart.svg'

const EmptyCart = props => {
    return (
        <div className={classes.Empty}>
            <img src={Empty} alt="пустая корзина"/>
            <h3>Корзина пуста :(</h3>
            <p>Тут будут отображены, добавленные вами товары</p>
        </div>
    )
}

export default EmptyCart