import React from 'react';
import classes from './Products.scss'

import ProductUnit from './ProductUnit/ProductUnit'


const Products = props => {

    const products = [
        {
            image: '../../../../assets/rastr/test-bag_3.jpg',
            title: 'Cotton White Underwear Black Out Edition',
            price: 2000
        }
    ]

    return (
        <section>
            <div className={classes.ProductsWrapper}>
                <ul className={classes.Products_list}>
                    {
                        products.map((el, ind) => {
                            return (
                                <ProductUnit
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