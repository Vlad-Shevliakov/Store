import React from 'react'
import classes from './OrderItem.scss'
import Button from '../../../../components/UI/Button/Button'

const OrderItem = props => {

    const {
        title,
        image,
        price,
        code,
        removeHandler
    } = props


   const removeFunc = () => {
        removeHandler(code)
   }

    return (
        <li className={classes.order_item}>
            <div className={classes.product_img}>
                <img src={image} alt={title}/>
            </div>

            <p>{title}</p>
            <ul className={classes.price_c_list} >
                <li className={classes.order_controls}>
                    <Button classType='numControl_l' />
                    <input 
                        type="number"
                        value="1"
                        className={classes.order_inp}
                    />
                    <Button classType='numControl_r' />
                </li>
                <li className={classes.product_price}>
                    <strong className={classes.price}>{price}</strong>
                    <span className={classes.currency}>грн</span>
                </li>
            </ul>
            <Button
                classType='CartRemoveButton'
                func={removeFunc}
            >
                <i className="fa fa-trash" aria-hidden="true" />
            </Button>
        </li>
    )
}

export default OrderItem