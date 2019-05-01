import React from 'react'
import classes from './ContentItems.scss'
import { Link } from 'react-router-dom'

const ContentItems = props => {

    const { hideAfterClick } = props

    const items = [
        {
            text: 'Главная',
            facls: 'fa fa-home',
            aria: true,
            to: '/'
        },
        {
            text: 'Личный кабинет',
            facls: 'fa fa-user',
            aria: true,
            to: '#'
        },
        {
            text: 'Каталог',
            facls: 'fa fa-list',
            aria: true,
            to: '/products'
        },

    ]

    return (
        <ul className={classes.ContentItems}>
            {
                items.map((item, ind) => {
                    return (
                        <li className={classes.Content__item} key={ind}>
                            <Link onClick={hideAfterClick} to={item.to}>
                                <i className={item.facls} aria-hidden={item.aria} />
                                {/* <span>{item.text}</span> */}
                                { item.text }
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ContentItems