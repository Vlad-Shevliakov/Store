import React from 'react';
import classes from './Home.scss'

import Slider from './Slider/Slider'
import Products from './Products/Products'
import Info from './Info/Info'


const Home = props => {
    return (
        <div className={classes.Home}>
            <Slider />
            <Products />
            <Info />
        </div>
    )
}

export default Home