import React from 'react'
import classes from './Booking.scss'
import { Link } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import booking from './BookingFade.scss'
// Это тест, только для вида!
import Bag from '../../../../../assets/rastr/test-bag_1.jpg'



const Booking = props => {

    const { cartItems, removeOrder } = props

    return (
        <div className={classes.container}>
            <TransitionGroup component={'ul'} className={classes.Booking}>
                {
                    cartItems.map((product, ind) => {
                        return (
                            <CSSTransition
                                key={product.code}
                                timeout={500}
                                classNames={{
                                    enter: booking["booking"],
                                    enterActive: booking["booking-enter-active"],
                                    exit: booking["booking-exit"],
                                    exitActive: booking["booking-exit-active"]
                                }}
                            >
                            <li>
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
                                            <a href="#0">{product.title}</a>
                                        </h3>
                                        <span className={classes.Price} >{product.price} грн</span>
                                        <div
                                            className={classes.Quantity}
                                            onClick={() => removeOrder(product.code)}
                                        >
                                            <strong>1 шт.</strong>
                                            <i className="fas fa-trash" />
                                        </div>
                                    </div>
                                </div>
                            </li>
                            </CSSTransition>
                        )
                    })
                }
            </TransitionGroup>
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