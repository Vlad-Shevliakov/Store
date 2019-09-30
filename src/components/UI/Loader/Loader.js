import React from "react"
import classes from "./Loader.scss"

export default props => (
    <div className={classes.spinner_wrp}>
        <ul className={classes.spinner}>
            <li className={classes.a} />
            <li className={classes.b} />
            <li />
        </ul>
    </div>
)
