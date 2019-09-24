import React from "react"
import classes from "./Home.scss"

import MainSlider from "./MainSlider/MainSlider"
import Products from "./Products/Products"
import Info from "./Info/Info"

const Home = props => {
    return (
        <div className={classes.Home}>
            <MainSlider />
            <Products />
            <Info />
        </div>
    )
}

export default Home
