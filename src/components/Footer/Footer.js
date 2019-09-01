import React from 'react'
import classes from './Footer.scss'

import Top from './Top/Top'
import Bottom from './Bottom/Bottom'

const Footer = props => {
    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                <Top />
                <Bottom />
            </div>
        </footer>
    )
}

export default Footer