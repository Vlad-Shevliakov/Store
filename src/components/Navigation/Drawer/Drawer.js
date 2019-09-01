import React from 'react'
import classes from './Drawer.scss'
import cn from 'classnames'
import Button from '../../UI/Button/Button'
import ContentItems from './ContentItems/ContentItems'


const Drawer = (props) => {
    const body = document.querySelector('BODY')

    const drawerClass = cn({
        [classes.drawer]: true,
        [classes.show]: props.show,
    })

    const overlayClass = cn({
        [classes.overlay]: true,
        [classes.show]: props.show,
    })

    if (props.show) {
        body.style.overflow = 'hidden'
        
    } else {
        body.style.overflow = 'auto'
    }

    return (
        <div>
            <aside className={drawerClass}>
                <div className={classes.drawer__top}>
                    <h3 className={classes.drawer_title}>Bagson</h3>
                    <Button 
                        func={props.switchFunc}
                        classType='ButtonHideDrawer'
                    />
                </div>
                <div className={classes.Drawer__middle}>
                    <ContentItems
                        hideAfterClick={props.switchFunc}
                    />
                </div>
            </aside>
            <div
                onClick={props.switchFunc}
                className={overlayClass}
            />
        </div>
    )
}

export default Drawer