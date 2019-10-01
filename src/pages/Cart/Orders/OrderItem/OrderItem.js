import React from "react"
import classes from "./OrderItem.scss"
import Button from "../../../../components/UI/Button/Button"

const OrderItem = props => {


    const {title, image, price, code, amount, removeHandler} = props

    const removeFunc = () => {
        removeHandler(code)
    }

    const changeAmount = event => {
        // setAmout(+event.target.value)
        console.log(typeof +event.target.value)
    }

    // const plusOne = () => {
    //     setAmout(amout + 1)
    // }

    // const subOne = () => {
    //     if (amout <= 1) {
    //         return
    //     }
    //     setAmout(amout - 1)
    // }

    return (
        <li className={classes.order_item}>
            <div className={classes.first_group}>
                <div className={classes.img_wrp}>
                    <div className={classes.product_img}>
                        <img src={image} alt={title} />
                    </div>
                </div>
                <ul className={classes.info_list}>
                    <li className={classes.title}>
                        <a href="##">{title}</a>
                    </li>
                    <li className={classes.order_code}>код: {code}</li>
                    <li className={classes.product_price}>
                        Цена:&nbsp;
                        <strong className={classes.price}>{price}</strong>
                        <span className={classes.currency}>грн</span>
                    </li>
                </ul>
                <ul className={classes.price_c_list}>
                    <li className={classes.order_controls}>
                        <Button classType="numControl_l" func={null} />
                        <input
                            type="number"
                            value={amount}
                            className={classes.order_inp}
                            onChange={changeAmount}
                        />
                        <Button classType="numControl_r" func={null} />
                    </li>
                    <li className={classes.product_price}>
                        <strong className={classes.price}>{price * amount}</strong>
                        <span className={classes.currency}>грн</span>
                    </li>
                </ul>
            </div>
            <Button classType="CartRemoveButton" func={removeFunc}>
                <i className="fa fa-trash" aria-hidden="true" />
            </Button>
        </li>
    )
}

export default OrderItem
