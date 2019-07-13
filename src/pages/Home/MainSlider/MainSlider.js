import React from 'react'
import classes from './Slider.scss'

import Carousel from '../../../HOC/Slider/Carousel'

const MainSlider = props => {
   
    const sliderList = [
        {
            pic: "https://picsum.photos/id/1/1450/240",
        },
        {
            pic: "https://picsum.photos/id/2/1450/240",
        },
        {
            pic: "https://picsum.photos/id/3/1450/240",
        },
        {
            pic: "https://picsum.photos/id/4/1450/240",
        }
    ]

    

    return (
        <section className={classes.SliderWrapper}>
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
            >
                { sliderList.map((item, ind) => {
                    return (
                        <div key={ind}>
                            <img src={item.pic} alt="###"/>
                        </div>
                    )
                }) }
            </Carousel>
        </section>
    )
}


export default MainSlider