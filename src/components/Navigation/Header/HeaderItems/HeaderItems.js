import React from 'react'
import classes from './HeaderItems.scss'

import UserInteraction from '../UserInteraction/UserInteraction'
import Item from './Item/Item'


const HeaderItems = (props) => {
    const { navigationItems } = props
    return (
        <div className={classes.HeaderItems}>
            <ul className={classes.HeaderItems__list}>
                { navigationItems.map((navItem, ind) => {
                    return (
                        <Item
                            currentClass="ActivePage" 
                            key={ind}
                            text={navItem.text}
                            path={navItem.to}
                            isExact={navItem.exact}
                        />
                    )
                }) }
            </ul> 
            <UserInteraction />
        </div>
    )
}

export default HeaderItems