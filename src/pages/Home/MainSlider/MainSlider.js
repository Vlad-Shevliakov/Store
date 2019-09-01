import React from 'react'
import classes from './MainSlider.scss'

import Carousel from '../../../HOC/Slider/Carousel'

const MainSlider = props => {
   
    const sliderList = [
        {
            pic: "https://picsum.photos/id/1/1450/350",
        },
        {
            pic: "https://picsum.photos/id/2/1450/350",
        },
        {
            pic: "https://picsum.photos/id/3/1450/350",
        },
        {
            pic: "https://picsum.photos/id/4/1450/350",
        }
    ]

    
    return (
        <section className={classes.SliderWrapper}>
            <Carousel
                autoPlay
                infiniteLoop
                emulateTouch
            >
                { sliderList.map((item, ind) => {
                    return (
                        <div key={ind}>
                            {/* <img src={item.pic} alt="###"/> */}
                            <div
                                className={classes.item}
                                style={{
                                    backgroundImage: `url(${item.pic})`
                                }}
                            />
                        </div>
                    )
                }) }
            </Carousel>
        </section>
    )
}


export default MainSlider