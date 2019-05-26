import React from 'react'
import classes from './Dots.scss'


const Dots = props => {

    const { total, index } = props

    if (total === 0) return null

    return (
        <ul className={classes.DotWrap}>
            {
                [...Array(total)].map((_, ind) => {
                    return (
                        <li 
                            key={ind}
                            className={classes.Dot}
                            style={{opacity: index === ind ? '1' : '0.3'}} 
                        />
                    )
                })
            }
        </ul>
    )
}


export default Dots