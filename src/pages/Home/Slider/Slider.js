import React, { Component } from 'react'
import classes from './Slider.scss'

// Тест - потом уберу
const translateXY = (el, x, y, duration = 0) => {
    if (!el) return
  
    el.style.opacity = '1'
  
    // animation
    el.style.transitionDuration = duration + 'ms'
    el.style.webkitTransitionDuration = duration + 'ms'
  
    el.style.transform = `translate(${x}px, ${y}px)`
    el.style.webkitTransform = `translate(${x}px, ${y}px) translateZ(0)`
  }
class Slider extends Component {
    state = {
        position: 0,
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


    slideToLeft = () => {
        if (this.state.position === 0) {
            this.setState({
                position: this.state.sliderList.length - 1
            })
            return  
        }

        this.setState(prevState => {
            return {
                position: prevState.position - 1
            }
        })
    }

    slideToRight = () => {

        if (this.state.position === this.state.sliderList.length - 1) {
            this.setState({
                position: 0
            })
            return
        }
        this.setState(prevState => {
            return {
                position: prevState.position + 1
            }
        })
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const frames = [].concat(nextProps.frames || nextProps.children || [])
        const nextState = { frames }
        if (frames.length && frames.length !== prevState.frames.length) {
          nextState.current = 0
        }
        return nextState
      }
    
      hideFrames () {
        for (let i = 1; i < this.state.frames.length; i++) {
          this.refs['f' + i].style.opacity = 0
        }
      }
    
      onTouchStart (e) {
        if (this.state.total < 2) return
        // e.preventDefault()
    
        this.clearAutoTimeout()
        this.updateFrameSize()
        this.prepareSiblingFrames()
    
        const { pageX, pageY } = (e.touches && e.touches[0]) || e
        this.setState({
          startX: pageX,
          startY: pageY,
          deltaX: 0,
          deltaY: 0
        })
    
        this.refs.wrapper.addEventListener('mousemove', this.onTouchMove, {capture: true})
        this.refs.wrapper.addEventListener('mouseup', this.onTouchEnd, {capture: true})
        this.refs.wrapper.addEventListener('mouseleave', this.onTouchEnd, {capture: true})
      }
    
      onTouchMove (e) {
        if (e.touches && e.touches.length > 1) return
        this.clearAutoTimeout()
    
        const { pageX, pageY } = (e.touches && e.touches[0]) || e
        let deltaX = pageX - this.state.startX
        let deltaY = pageY - this.state.startY
        this.setState({
          deltaX: deltaX,
          deltaY: deltaY
        })
    
        if (this.props.axis === 'x' && Math.abs(deltaX) > Math.abs(deltaY)) {
          e.preventDefault()
          e.stopPropagation()
        }
        if (this.props.axis === 'y' && Math.abs(deltaY) > Math.abs(deltaX)) {
          e.preventDefault()
          e.stopPropagation()
        }
    

        if (!this.props.loop) {
          if (this.state.current === this.state.frames.length - 1) {
            deltaX < 0 && (deltaX /= 3)
            deltaY < 0 && (deltaY /= 3)
          }
          if (this.state.current === 0) {
            deltaX > 0 && (deltaX /= 3)
            deltaY > 0 && (deltaY /= 3)
          }
        }
    
        this.moveFramesBy(deltaX, deltaY)
      }
    
      onTouchEnd () {
        const direction = this.decideEndPosition()
        direction && this.transitFramesTowards(direction)
    
        // cleanup
        this.refs.wrapper.removeEventListener('mousemove', this.onTouchMove, {capture: true})
        this.refs.wrapper.removeEventListener('mouseup', this.onTouchEnd, {capture: true})
        this.refs.wrapper.removeEventListener('mouseleave', this.onTouchEnd, {capture: true})
    
        setTimeout(() => this.prepareAutoSlide(), this.props.duration)
      }
    
      decideEndPosition () {
        const { deltaX = 0, deltaY = 0, current, frames } = this.state
        const { axis, loop, minMove } = this.props
    
        switch (axis) {
          case 'x':
            if (loop === false) {
              if (current === 0 && deltaX > 0) return 'origin'
              if (current === frames.length - 1 && deltaX < 0) return 'origin'
            }
            if (Math.abs(deltaX) < minMove) return 'origin'
            return deltaX > 0 ? 'right' : 'left'
          case 'y':
            if (loop === false) {
              if (current === 0 && deltaY > 0) return 'origin'
              if (current === frames.length - 1 && deltaY < 0) return 'origin'
            }
            if (Math.abs(deltaY) < minMove) return 'origin'
            return deltaY > 0 ? 'down' : 'up'
          default:
        }
      }
    
      moveFramesBy (deltaX, deltaY) {
        const { prev, current, next } = this.state.movingFrames
        const { frameWidth, frameHeight } = this.state
    
        switch (this.props.axis) {
          case 'x':
            translateXY(current, deltaX, 0)
            if (deltaX < 0) {
              translateXY(next, deltaX + frameWidth, 0)
            } else {
              translateXY(prev, deltaX - frameWidth, 0)
            }
            break
          case 'y':
            translateXY(current, 0, deltaY)
            if (deltaY < 0) {
              translateXY(next, 0, deltaY + frameHeight)
            } else {
              translateXY(prev, 0, deltaY - frameHeight)
            }
            break
          default:
        }
      }
    
      prepareAutoSlide () {
        if (this.state.frames.length < 2) return
    
        this.clearAutoTimeout()
        this.updateFrameSize(() => {
          this.prepareSiblingFrames()
        })
    

        if (this.mounted && this.props.loop && this.props.auto) {
          const slideTimeoutID = setTimeout(this.autoSlide, this.props.interval)
          this.setState({ slider: slideTimeoutID })
        }
      }

    render() {
        return (
            <section className={classes.SliderWrapper}>
                <div className={classes.Slider}>
                    
                </div>
                <div 
                    onClick={this.slideToLeft}
                    className={classes.Arrow_prev}
                >
                    <i className="fa fa-arrow-left"></i>
                </div>
                <div 
                    onClick={this.slideToRight}
                    className={classes.Arrow_next}
                >
                    <i className="fa fa-arrow-right"></i>
                </div>
                <span className={classes.Counter}>
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
                </div>
            </section>
        )
    }

}

export default Slider