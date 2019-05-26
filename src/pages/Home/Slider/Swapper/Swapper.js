import React, { Component } from 'react'
import classes from './Swapper.scss'
import Dots from '../Slider_UI/Dots/Dots'

const translateXY = (el, x, y, duration = 0) => {
    if (!el) return
    el.style.opacity = '1'
    // для анимации
    el.style.transitionDuration = duration + 'ms'
    el.style.webkitTransitionDuration = duration + 'ms'
    el.style.transform = `translate(${x}px, ${y}px)`
    el.style.webkitTransform = `translate(${x}px, ${y}px) translateZ(0)`
}

const Swapper = class extends Component {

    constructor (props) {
        super(props)
        this.state = {
            frames: props.children.length,
            current: 0
        }
        this.mounted = false
        if (props.loop === false && props.auto) {
            console.warn('Auto-slide only works in loop mode.')
        }
    }

    static defaultProps = {
        axis: 'x',
        auto: false,
        loop: false,
        interval: 4000,
        duration: 600,
        minMove: 42
    }

    componentDidMount () {
        this.mounted = true
        this.prepareAutoSlide()
        this.hideFrames()

        this.refs.wrapper.addEventListener('touchmove', this.onTouchMove, {capture: true})
        this.refs.wrapper.addEventListener('touchend', this.onTouchEnd, {capture: true})
    }

    componentWillUnmount () {
        this.mounted = false
        this.clearAutoTimeout()

        this.refs.wrapper.removeEventListener('touchmove', this.onTouchMove, {capture: true})
        this.refs.wrapper.removeEventListener('touchend', this.onTouchEnd, {capture: true})
    }

    componentDidUpdate(_, prevState) {
        if (this.state.frames.length && this.state.frames.length !== prevState.frames.length) {
            // reset to default state
            this.hideFrames()
            this.prepareAutoSlide()
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const frames = [].concat(nextProps.frames || nextProps.children || [])
        const nextState = { frames }
        if (frames.length && frames.length !== prevState.frames.length) {
            nextState.current = 0
        }
        return nextState
    }

    hideFrames = () => {
        for (let i = 1; i < this.state.frames.length; i++) {
            this.refs['f' + i].style.opacity = 0
        }
    }

    onTouchStart = e => {
        const { pageX, pageY } = (e.touches && e.touches[0]) || e
        if (this.state.total < 2) return
        // e.preventDefault()

        this.clearAutoTimeout()
        this.updateFrameSize()
        this.prepareSiblingFrames()

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

    onTouchMove = e => {
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

    onTouchEnd = () => {
        const direction = this.decideEndPosition()
        direction && this.transitFramesTowards(direction)

        // cleanup
        this.refs.wrapper.removeEventListener('mousemove', this.onTouchMove, {capture: true})
        this.refs.wrapper.removeEventListener('mouseup', this.onTouchEnd, {capture: true})
        this.refs.wrapper.removeEventListener('mouseleave', this.onTouchEnd, {capture: true})

        setTimeout(() => this.prepareAutoSlide(), this.props.duration)
    }

    decideEndPosition = () => {
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

    moveFramesBy = (deltaX, deltaY) => {
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

    prepareAutoSlide = () => {

        if (this.state.frames.length < 2) return

        this.clearAutoTimeout()
        this.updateFrameSize(() => {
            this.prepareSiblingFrames()
        })

        // auto slide only avalible in loop mode
        if (this.mounted && this.props.loop && this.props.auto) {
            const slideTimeoutID = setTimeout(this.autoSlide, this.props.interval)
            this.setState({ slider: slideTimeoutID })
        }
    }

    autoSlide = rel => {
        this.clearAutoTimeout()

        switch (rel) {
        case 'prev':
            this.transitFramesTowards(this.props.axis === 'x' ? 'right' : 'down')
        break
        case 'next':
        default:
            this.transitFramesTowards(this.props.axis === 'x' ? 'left' : 'up')
        }

        // prepare next move after animation
        setTimeout(() => this.prepareAutoSlide(), this.props.duration)
    }

    next = () => {
        const { current, frames } = this.state
        if (!this.props.loop && current === frames.length - 1) return false
        this.autoSlide('next')
    }

    prev = () => {

        if (!this.props.loop && this.state.current === 0) return false
        const { prev, next } = this.state.movingFrames

        if (prev === next) {
            // Reprepare start position of prev frame
            // (it was positioned as "next" frame)
            if (this.props.axis === 'x') {
            translateXY(prev, -this.state.frameWidth, 0, 0)
            } else {
            translateXY(prev, 0, -this.state.frameHeight, 0)
            }
            prev.getClientRects() // trigger layout
        }

        this.autoSlide('prev')
    }

    clearAutoTimeout = () => {
        clearTimeout(this.state.slider)
    }

    updateFrameSize = cb => {
        const { width, height } = window.getComputedStyle(this.refs.wrapper)
        this.setState({
            frameWidth: parseFloat(width.split('px')[0]),
            frameHeight: parseFloat(height.split('px')[0])
        }, cb)
    }

    getSiblingFrames = () => {
        return {
            current: this.refs['f' + this.getFrameId()],
            prev: this.refs['f' + this.getFrameId('prev')],
            next: this.refs['f' + this.getFrameId('next')]
        }
    }

    prepareSiblingFrames = () => {
        const siblings = this.getSiblingFrames()

        if (!this.props.loop) {
            this.state.current === 0 && (siblings.prev = undefined)
            this.state.current === this.state.frames.length - 1 && (siblings.next = undefined)
        }

        this.setState({ movingFrames: siblings })

        translateXY(siblings.current, 0, 0)
        if (this.props.axis === 'x') {
            translateXY(siblings.prev, -this.state.frameWidth, 0)
            translateXY(siblings.next, this.state.frameWidth, 0)
        } else {
            translateXY(siblings.prev, 0, -this.state.frameHeight)
            translateXY(siblings.next, 0, this.state.frameHeight)
        }

        return siblings
    }

    getFrameId = pos => {
        const { frames, current } = this.state
        const total = frames.length
        switch (pos) {
            case 'prev':
                return (current - 1 + total) % total
            case 'next':
                return (current + 1) % total
            default:
            return current
        }
    }

    transitFramesTowards = direction => {
        const { prev, current, next } = this.state.movingFrames
        const { duration, axis, onTransitionEnd } = this.props

        let newCurrentId = this.state.current
        switch (direction) {
            case 'up':
                translateXY(current, 0, -this.state.frameHeight, duration)
                translateXY(next, 0, 0, duration)
                newCurrentId = this.getFrameId('next')
            break
            case 'down':
                translateXY(current, 0, this.state.frameHeight, duration)
                translateXY(prev, 0, 0, duration)
                newCurrentId = this.getFrameId('prev')
            break
            case 'left':
                translateXY(current, -this.state.frameWidth, 0, duration)
                translateXY(next, 0, 0, duration)
                newCurrentId = this.getFrameId('next')
            break
            case 'right':
                translateXY(current, this.state.frameWidth, 0, duration)
                translateXY(prev, 0, 0, duration)
                newCurrentId = this.getFrameId('prev')
            break
            default:
                translateXY(current, 0, 0, duration)
            if (axis === 'x') {
                translateXY(prev, -this.state.frameWidth, 0, duration)
                translateXY(next, this.state.frameWidth, 0, duration)
            } else if (axis === 'y') {
                translateXY(prev, 0, -this.state.frameHeight, duration)
                translateXY(next, 0, this.state.frameHeight, duration)
            }
        }

        onTransitionEnd && setTimeout(() => onTransitionEnd(this.getSiblingFrames()), duration)

        this.setState({ current: newCurrentId })
    }


    render () {

        const { frames, current } = this.state

        return (
            <div className={classes.Swapper}>
                <div
                    ref='wrapper'
                    onTouchStart={this.onTouchStart}
                    className={classes.SliderList}
                    onMouseDown={this.onTouchStart}
                >
                    {
                        frames.map((frame, i) => {
                            return (
                                <div 
                                    ref={'f' + i} 
                                    key={i}
                                    style={{
                                        width: '100%',
                                        position: 'absolute'
                                    }}
                                >
                                    { frame }
                                </div>
                            )
                        })
                    }
                    {
                        this.props.frames && this.props.children
                    }
                </div>
                <Dots 
                    index={current}
                    total={frames.length} 
                /> 
                <div 
                    onClick={this.prev}
                    className={classes.Arrow_prev}
                />
                <div
                    onClick={this.next}
                    className={classes.Arrow_next}
                />
            </div>
        )
    }
}


export default Swapper