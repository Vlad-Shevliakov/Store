import React from 'react'
import classes from './Booking.scss'

import Bag from '../../../../../assets/rastr/test-bag_1.jpg'

// Это тест, только для вида!


const Booking = props => {

    const {cartItems} = props

    return (
        <ul className={classes.Booking}>
            {
                cartItems.map((product, ind) => {
                    return (
                        <li key={ind}>
                            <div className={classes.Item}>
                                <img src={Bag} alt=""/>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Booking