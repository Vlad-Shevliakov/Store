import React from 'react'
import classes from './HeaderItems.scss'
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
            <div className={classes.UserInteraction}>
                <div className={classes.UserInteraction__shop }>
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    <span className={classes.SubText} >Товары</span>
                </div>
                <div className={classes.UserInteraction__auth}>
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <span className={classes.SubText} >Личный кабинет</span>
                </div>
            </div>
        </div>
    )
}

export default HeaderItems