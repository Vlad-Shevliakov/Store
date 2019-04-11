import React from 'react'
import classes from './HeaderItems.scss'
import Item from './Item/Item'


const HeaderItems = (props) => {
    const { navigationItems } = props
    return (
        // <div className={classes.HeaderItems}>
            <ul className={classes.HeaderItems__list}>
                { navigationItems.map((navItem, ind) => {
                    return (
                        <Item 
                            key={ind}
                            text={navItem}
                        />
                    )
                }) }
            </ul>
        // </div>
    )
}

export default HeaderItems