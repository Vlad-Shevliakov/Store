import React from "react"
import classes from "./ActiveProduct.scss"

const ActiveProduct = props => {
    return (
        <div className={classes.container}>
            <section className={classes.activeProduct}></section>
        </div>
    )
}

export default ActiveProduct
