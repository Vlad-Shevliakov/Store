import React, { Component } from 'react'
import classes from './Slider.scss'

import Swapper from '../../../HOC/Swapper/Swapper'
import Dots from './Slider_UI/Dots'

class Slider extends Component {
   
    constructor(props) {
        super(props)
        this.state = {
            sliderList: [
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
                }
            ]
        }
    }


    render() {
        return (
            <section className={classes.SliderWrapper}>
                <div className={classes.Slider}>
                    <Swapper loop auto widgets={[Dots]} >
                        <div className={classes.TestForItem}>Frame</div>
                        <div className={classes.TestForItem}>Frame 2</div>
                        <div className={classes.TestForItem}>Frame 3</div>
                    </Swapper>
                </div>
                {/* <div> 
                    onClick={this.slideToLeft}
                    className={classes.Arrow_prev}
                >
                </div>
                <div> 
                    onClick={this.slideToRight}
                    className={classes.Arrow_next}
                >
                </div> */}
                {/* <span className={classes.Counter}>
                    {this.state.position + 1}/{this.state.sliderList.length}
                </span>
                <div className={classes.Crumb_container} >
                    <ul>
                        {
                            this.state.sliderList.map((item, ind) => {
                                return (
                                    <li 
                                        key={ind}
                                        className={classes[ind === this.state.position ? 'Crumb_a' : 'Crumb']}
                                    />
                                )
                            })
                        }
                    </ul>
                </div> */}
            </section>
        )
    }

}


export default Slider