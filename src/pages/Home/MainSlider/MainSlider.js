import React from "react"
import classes from "./MainSlider.scss"

import Carousel from "../../../HOC/Slider/Carousel"

const MainSlider = props => {
    const sliderList = [
        {
            pic: "https://picsum.photos/id/20/1450/350"
        },
        {
            pic: "https://picsum.photos/id/30/1450/350"
        },
        {
            pic: "https://picsum.photos/id/23/1450/350"
        },
        {
            pic: "https://picsum.photos/id/24/1450/350"
        }
    ]

    return (
        <section className={classes.SliderWrapper}>
            <Carousel autoPlay infiniteLoop emulateTouch>
                {sliderList.map((item, ind) => {
                    return (
                        <div key={ind}>
                            <div
                                className={classes.item}
                                style={{
                                    backgroundImage: `url(${item.pic})`
                                }}
                            />
                        </div>
                    )
                })}
            </Carousel>
        </section>
    )
}

export default MainSlider
