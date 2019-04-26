import React from 'react'
import classes from './Info.scss'


const Info = props => {

    const infoItems = [
        {
            heading: 'Доставка по Украине',
            description: 'В любой город наложенным платежом',
            to: '',
            icon: 'fa fa-truck',
            aria: true
        },
        {
            heading: 'Работаем всю неделю',
            description: '9.00 - 18.00',
            to: '',
            icon: 'fa fa-clock',
            aria: true
        },
        {
            heading: 'Оплата При Получении',
            description: 'Курьеру или в отделении Новой Почты',
            to: '',
            icon: 'far fa-money-bill-alt',
            aria: true
        },
    ]

    return (
        <section className={classes.Info_Section}>
            <ul className={classes.Info_Section__list}>
                { infoItems.map((item, ind) => {
                    return (
                        <li key={ind}>
                            <div className={classes.icon_wrap}>
                                <i className={item.icon} aria-hidden={item.aria} />
                            </div>
                            <div className={classes.text_wrap}>
                                <h5 className={classes.heading}>
                                    <span>{item.heading}</span>
                                </h5>
                                <p className={classes.description}>
                                    {item.description}
                                </p>
                            </div>
                        </li>
                    )
                }) }
            </ul>
        </section>
    )
}

export default Info