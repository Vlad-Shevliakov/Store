import React, { useState } from 'react'
import classes from './ProductUnit.scss'
import Button from '../../../../components/UI/Button/Button'


import { Link } from 'react-router-dom'

const ProductUnit = props => {

    const [liked, changeLike] = useState(false)

    const shareFunc = () => {
        console.log('[Share]')
    }

    const addToCartHandler = () => {
        console.log('[Cart]')
    }

    const likeHandler = () => {
        changeLike(!liked)
    }


    const { image, price, title } = props

    return (
        <li className={classes.ProductUnit}>
            <div className={classes.product_preview}>
                <Link to={'#'}>
                    <img className={classes.image} src={image} alt='product info'/>
                </Link>
            </div>
            <div className={classes.product_info}>
                <Link
                    to={'#'}
                    className={classes.title}
                >
                    {title}
                </Link>
            </div>
            <div className={classes.product_price}>
                <strong className={classes.price}>{price}</strong>
                <span className={classes.currency}>грн</span>
            </div>
            <div className={classes.button_wrapper}>
                <Button
                        func={addToCartHandler}
                        classType='ProductButton_cart'
                    >
                        <span className={classes._plusone}>В корзину</span>
                </Button>
                <Link
                    to={'#'}
                    className={classes.share_link}
                    onClick={shareFunc}
                >
                    <span>Детальнее</span>
                </Link>
            </div>
            <Button
                    classType='ProductButton_like'
                    func={likeHandler}
                >
                    {
                        !liked ? 
                            <i className="far fa-heart" /> 
                            : 
                            <i className="fas fa-heart" aria-hidden="true"></i>
                    }
            </Button>
        </li>
    )
}

export default ProductUnit