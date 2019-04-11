import React from 'react'
import classes from './Item.scss'
import { NavLink } from 'react-router-dom'


const Item = (props) => {
    const { text } = props
    return (
        <li className={classes.Item}>
            <NavLink to="#">
                {text}
            </NavLink>
        </li>
    )
}

export default Item