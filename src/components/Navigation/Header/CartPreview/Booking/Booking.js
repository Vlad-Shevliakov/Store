import React from 'react'
import classes from './Booking.scss'

import { Link } from 'react-router-dom'

// Это тест, только для вида!
import Bag from '../../../../../assets/rastr/test-bag_1.jpg'



const Booking = props => {

    const {cartItems} = props

    return (
        <div className={classes.container}>
            <ul className={classes.Booking}>
                {
                    cartItems.map((product, ind) => {
                        return (
                            <li key={ind}>
                                <div className={classes.Item}>
                                    <div className={classes.ImgBox}>
                                        <a href={`#${ind}`}>
                                            <img 
                                                src={Bag}
                                                alt="#"
                                            />
                                        </a>
                                    </div>
                                    <div className={classes.otherData}>
                                        <h3 className={classes.prodTitle}>
                                            <a href="#0">{product.name}</a>
                                        </h3>
                                        <span className={classes.Price} >{product.price} грн</span>
                                        <div className={classes.Quantity}>
                                            <strong>{product.amount} шт.</strong>
                                            <i className="fas fa-trash" />
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            <div className={classes.btnbox}>
                <Link
                    className={classes.CheckoutBtn}
                    to={'cart'}
                >
                    Продолжить
                </Link>
            </div>
        </div>
    )
}

export default Booking