import React from "react"
import classes from "./ContentItems.scss"
import {Link} from "react-router-dom"

import home from "../../../../assets/ui-items/drawer/home.svg"
import cart from "../../../../assets/ui-items/drawer/cart.svg"
import user from "../../../../assets/ui-items/drawer/user.svg"
import list from "../../../../assets/ui-items/drawer/list.svg"

const ContentItems = props => {
    const {hideAfterClick} = props

    const items = [
        {
            text: "Главная",
            fasm: "fa fa-home",
            img: home,
            aria: true,
            to: "/"
        },
        {
            text: "Личный кабинет",
            fasm: "fa fa-user",
            img: user,
            aria: true,
            to: "/profile"
        },
        {
            text: "Каталог",
            fasm: "fa fa-list",
            img: list,
            aria: true,
            to: "/catalog"
        },
        {
            text: "Корзина",
            fasm: "fa fa-shopping-cart",
            img: cart,
            aria: true,
            to: "/cart"
        }
    ]

    return (
        <ul className={classes.content_tems}>
            {items.map((item, ind) => {
                return (
                    <li key={ind}>
                        <Link
                            to={item.to}
                            onClick={hideAfterClick}
                            className={classes.content_item}
                        >
                            <i
                                className={classes.upic}
                                style={{backgroundImage: `url(${item.img})`}}
                            />
                            {item.text}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default ContentItems
