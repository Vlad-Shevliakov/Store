import React from 'react'
import classes from './Slider.scss'
import Button from '../../../components/UI/Button/Button'

const Slider = props => {

    const sliderList = [
        {
            top: 'Один',
            sub: 'Низкие цены',
            image: ''
        },
        {
            top: 'Два',
            sub: 'Быстрая доставка',
            image: ''
        },
        {
            top: 'Три',
            sub: 'Качество товара',
            image: ''
        },
    ]

    return (
        <section className={classes.SliderWrapper}>
            <ul className={classes.Slider}>
                {
                    sliderList.map(item => {
                        return (
                            <li key={item.top} className={classes.SliderItem}>
                                <div className={classes.InfoBox}>
                                    <h3>{item.top}</h3>
                                    <span>{item.sub}</span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            <Button className={classes.ArrowButton} id="previous">
                <i class="fa fa-arrow-left"></i>
            </Button>
            <Button className={classes.ArrowButton} id="next">
                <i class="fa fa-arrow-right"></i>
            </Button>
            <div className={classes.Counter}></div>
            <div className={classes.Pagination} >
                <ul>
                </ul>
            </div>
        </section>
    )
}

export default Slider