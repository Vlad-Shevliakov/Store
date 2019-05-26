import React from 'react';
import classes from './Products.scss'

import ProductUnit from './ProductUnit/ProductUnit'
import p1 from '../../../assets/rastr/test-bag_1.jpg'
import p2 from '../../../assets/rastr/test-bag_2.jpg'


const Products = props => {

    const products = [
        {
            image: p1,
            title: 'Cotton Green Underwear Black Out Edition',
            price: 2000
        },
        {
            image: p2,
            title: 'Cotton Purple Underwear',
            price: 1700
        },
        {
            image: p1,
            title: 'Cotton Green Underwear Black Out Edition',
            price: 2000
        },
        {
            image: p2,
            title: 'Cotton Purple Underwear',
            price: 1700
        },
        {
            image: p1,
            title: 'Cotton Green Underwear Black Out Edition',
            price: 2000
        },
        {
            image: p2,
            title: 'Cotton Green Underwear Black Out Edition',
            price: 1700
        },
        {
            image: p1,
            title: 'Cotton Green Underwear Black Out Edition',
            price: 2000
        },
        {
            image: p1,
            title: 'Cotton Green Underwear Black Out Edition',
            price: 2000
        }
    ]

    return (
        <section className={classes.ProductsSection}>
            <div className={classes.title_wrapper}>
                <h2 className={classes.Title}>
                    <i className="far fa-star"></i>
                    Популярное
                </h2>
            </div>
            <div className={classes.ProductsWrapper}>
                <ul className={classes.Products_list}>
                    {
                        products.map((el, ind) => {
                            return (
                                <ProductUnit
                                    key={ind}
                                    image={el.image}
                                    title={el.title}
                                    price={el.price}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default Products