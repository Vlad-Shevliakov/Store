import React from "react"
import classes from "./Bottom.scss"

const Bottom = props => {
    return (
        <div className={classes.bottom}>
            <p className={classes.copyright}>
                © {new Date().getFullYear()} Интернет-магазин Bagson
            </p>
        </div>
    )
}

export default Bottom
