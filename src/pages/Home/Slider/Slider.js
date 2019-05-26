import React from 'react'
import classes from './Slider.scss'
import Swapper from './Swapper/Swapper'


const Slider = props => {
   
    const sliderList = [
        {
            top: '1',
            sub: 'Низкие цены',
            image: '2ECC40'
        },
        {
            top: '2',
            sub: 'Быстрая доставка',
            image: 'ffcc00'
        },
        {
            top: '3',
            sub: 'Качество товара',
            image: 'ffff00'
        },
        {
            top: '4',
            sub: 'Качество товара',
            image: 'ff3300'
        },
    ]

    return (
        <section className={classes.SliderWrapper}>
            <Swapper loop auto>
                {
                    sliderList.map((item, ind) => {
                        return (
                            <li 
                                key={ind}
                                className={classes.Item}
                                style={{
                                    backgroundColor: `#${item.image}`
                                }}
                            >
                                <p>
                                    { item.top }
                                </p>
                            </li>
                        )
                    })
                }
            </Swapper>
        </section>
    )
}


export default Slider