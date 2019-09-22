import React from 'react';
import classes from './Products.scss'
import { connect } from 'react-redux'
import ProductUnit from './ProductUnit/ProductUnit'




const Products = props => {

   


    return (
        <section className={classes.ProductsSection}>
            <div className={classes.title_wrapper}>
                <h2 className={classes.title}>
                    <i className="far fa-star"></i>
                    Популярное
                </h2>
            </div>
            <div className={classes.ProductsWrapper}>
                <ul className={classes.Products_list}>
                    {
                        props.popular.map((el, ind) => {
                            return (
                                <ProductUnit
                                    key={ind}
                                    image={el.img}
                                    title={el.title}
                                    price={el.price}
                                    wholeItem={{...el}}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

const mapStateToProps = store => {
    return {
        popular: store.home.popular,
    }
}

export default connect(mapStateToProps)(Products)