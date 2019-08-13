import React, { useState } from 'react'
import classes from './OrderItem.scss'
import Button from '../../../../components/UI/Button/Button'
import { CSSTransition } from 'react-transition-group'
import fadeTransition from './FadeTransition.scss'

const OrderItem = props => {

    const {
        title,
        image,
        price,
        code,
        removeHandler
    } = props


    const [deleteItem, setDeletedItem] = useState(false)


    const removeFunc = () => {
        removeHandler(code)
        setDeletedItem(false)
    }

    return (
        <li>
            <CSSTransition
                in={deleteItem}
                timeout={401}
                classNames={fadeTransition}
                // unmountOnExit
                onEntered={removeFunc}
            >
                <div className={classes.order_item}>
                    <div className={classes.group_one}>
                        <div className={classes.product_img}>
                            <img src={image} alt={title}/>
                        </div>

                        <div className={classes.product_details}>
                            <p>
                                <strong className={classes.quantity}>
                                    1 шт.&nbsp;
                                </strong>
                                <span>
                                    {title}
                                </span>
                            </p>
                            <p className={classes.product_code}>
                                code: {code}
                            </p>
                        </div>
                    </div>

                    <ul className={classes.group_two}>
                        <li className={classes.price}>
                            {price} грн.
                        </li>
                        <li className={classes.product_quantity}>
                            <input type="number" onChange={() => console.log('x')} value="1"/>
                        </li>
                        <li className={classes.subtotal}>
                            <span>120 {'грн'}</span>
                        </li>
                    </ul>
                    {/*  */}
                    <Button
                        classType='CartRemoveButton'
                        func={() => setDeletedItem(true)}
                    >
                        <i className="fa fa-trash" aria-hidden="true" />
                    </Button>
                </div>
            </CSSTransition>
        </li>
    )
}

export default OrderItem