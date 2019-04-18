import React from 'react'
import classes from './Input.scss'

const Input = (props) => {

    return (
        <input
            className={classes[props.classType]}
            type={props.type}
            onChange={props.func}
            placeholder={props.description}
        />
    )
}

export default Input