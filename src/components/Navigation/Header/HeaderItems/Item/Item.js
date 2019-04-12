import React from 'react'
import classes from './Item.scss'
import { NavLink } from 'react-router-dom'


const Item = (props) => {
    const { text, path, currentClass, isExact } = props
    return (
        <li className={classes.Item}>
            <NavLink
                to={path}
                exact={isExact}
                activeClassName={classes[currentClass]}
                className={classes.Link}
            >
                {text}
            </NavLink>
        </li>
    )
}

export default Item