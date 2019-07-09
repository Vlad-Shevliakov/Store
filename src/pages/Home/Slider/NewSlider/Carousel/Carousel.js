import React, { Component } from 'react'


const Carousel = class extends Component {





    state = {
        isInit: false,
        itemSize: 0,
        wrapperSize: 0,

    }


    componentDidMount() {
        if (!this.props.children) return
        // если есть потомки - строим
        this.buildCarousel();

        console.log(this.state)

    }


    buildCarousel = () => {

    }


    updateWindowSizes = () => {
        if (!this.state.isInit) {
            return
        }

        const isHorizontal = this.props.axis === 'horizontal'
        const firstItem = this.itemsRef[0]
        const itemSize = isHorizontal ? firstItem.clientWidth : firstItem.clientHeight


        this.setState((_state, props) => ({
            itemSize: itemSize,
            wrapperSize: isHorizontal ? itemSize * props.children.length : itemSize
        }));

        if (this.thumbsRef) {
            this.thumbsRef.updateSizes();
        }
    }



    bindWindowEvents = () => {
        // при изменении размера окна, нужно пересчитать размеры
        window.addEventListener('resize')
    }




    render() {
        console.log(this.state)
        return (
            <>
            <p>s</p>
            </>
        )
    }

}


export default Carousel