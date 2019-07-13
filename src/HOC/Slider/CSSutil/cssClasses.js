import classNames from 'classnames';

import classes from '../Carousel.scss'


export default {
    CAROUSEL: isSlider => classNames({
        [classes.carousel]: true,
        [classes.carousel_slider]: isSlider
    }),

    WRAPPER: (isSlider, axis) => classNames({
        [classes.thumbs_wrapper]: !isSlider,
        [classes.slider_wrapper]: isSlider,
        [classes.axis_horizontal]: axis === "horizontal",
    }),
    
    SLIDER: (isSlider, isSwiping) => classNames({
        [classes.thumbs]: !isSlider,
        [classes.slider]: isSlider,
        [classes.animated]: !isSwiping
    }),

    ITEM: (isSlider, selected) => classNames({
        [classes.thumb]: !isSlider,
        [classes.slide]: isSlider,
        [classes.selected]: selected
    }),

    DOT: (selected) => classNames({
        [classes.dot]: true,
        [classes.selected]: selected
    })
}