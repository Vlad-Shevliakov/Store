import React from 'react'
import classes from './Slider.scss'
import Carousel from 'react-slick'


const Slider = props => {
   
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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <section className={classes.SliderWrapper}>
            <Carousel
                {...settings}
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


export default Slider