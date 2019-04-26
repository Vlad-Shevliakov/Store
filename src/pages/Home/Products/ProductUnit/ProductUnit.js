import React from 'react'
import classes from './ProductUnit.scss'

import { Link } from 'react-router-dom'
import I from '../../../../assets/rastr/test-bag_3.jpg'

const ProductUnit = props => {

    const { image, price, title } = props

    return (
        <li className={classes.ProductUnit}>
            <div className={classes.product_preview}>
                <Link to='#'>
                    <img className={classes.image} src={I} alt='test'/>
                </Link>
            </div>
            <div className={classes.product_info}>
                <span className={classes.title}>{title}</span>
                <div className={classes.product_price}>
                    <span className={classes.price}>{price}</span>
                    <span className={classes.currency}>грн</span>
                </div>
            </div>
        </li>
    )
}

export default ProductUnit