import React from 'react'
import classes from './OrderItem.scss'

import Button from '../../../../components/UI/Button/Button'

const OrderItem = props => {


    const combinedClasses = [classes.order_item]


    const {
        title,
        image,
        price,
        code,
        removeHandler
    } = props

    const removeFunc = () => {
        removeHandler(code)
        combinedClasses.push('del')
    }

    return (
        <li>
            <div className={combinedClasses.join(' ')}>
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
                {/*  */}
                <ul className={classes.group_two}>
                    <li className={classes.price}>
                        {price} грн.
                    </li>
                    <li className={classes.product_quantity}>
                        <input type="number" />
                    </li>
                    <li className={classes.subtotal}>
                        <span>120 {'грн'}</span>
                    </li>
                </ul>
                {/*  */}
                <Button
                    classType='CartRemoveButton'
                    func={removeFunc}
                >
                    <i className="fa fa-trash" aria-hidden="true" />
                </Button>
            </div>
        </li>
    )
}

export default OrderItem