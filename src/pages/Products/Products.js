import React, { PureComponent } from 'react'
import classes from './Products.scss'
import Filters from './Filters/Filters'
import Catalog from './Catalog/Catalog'


class Products extends PureComponent {


    render() {

        return (
            <div className={classes.wrapper}>
                <div className={classes.products}>
                    <Filters />
                    <Catalog />
                </div>
            </div>
        )
    }
}

export default Products