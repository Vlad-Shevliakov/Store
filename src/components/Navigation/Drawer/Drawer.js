import React from 'react'
import classes from './Drawer.scss'

import Button from '../../UI/Button/Button'
import Logo from '../../../assets/vector/logo.svg'
import ContentItems from './ContentItems/ContentItems'


const Drawer = (props) => {
    const body = document.querySelector('BODY')
    const DrawerClasses = [classes.Drawer]
    const OverlayClasses = [classes.Overlay]

    if (props.show) {
        body.style.overflow = 'hidden'
        DrawerClasses.push(classes.show)
        OverlayClasses.push(classes.show)
    }
    if (!props.show) body.style.overflow = 'auto'


    return (
        <div>
            <aside className={DrawerClasses.join(' ')}>
                <div className={classes.Drawer__top}>
                    <img 
                        src={Logo}
                        alt='логотип магазина'
                        className={classes.DrawerLogo}
                    />
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
                className={OverlayClasses.join(' ')}
            />
        </div>
    )
}

export default Drawer