import React from 'react'
import classes from './Button.scss'


const Button = (props) => {
    return (
        <button
            className={classes[props.classType]}
            onClick={props.func}
            disabled={props.disabled}
        >
            { props.children }
        </button>
    )
}

export default Button