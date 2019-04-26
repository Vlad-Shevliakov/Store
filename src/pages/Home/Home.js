import React from 'react';
import classes from './Home.scss'


import Products from './Products/Products'
import Info from './Info/Info'


const Home = props => {
    return (
        <div className={classes.Home}>
            <Products />
            <Info />
        </div>
    )
}

export default Home