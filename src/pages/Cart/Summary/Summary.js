import React from 'react'
import classes from './Summary.scss'

const Summary = props => {
    return (
        <div className={classes.Summary}>
            <div className={classes.info_box}>
                <h2 className={classes.title}>
                    Итого:
                    <span>
                        { props.totalSumm } грн.
                    </span>

                </h2>
            </div>
        </div>
    )
}

export default Summary