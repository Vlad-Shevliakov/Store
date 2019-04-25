import React from 'react'
import classes from './Drawer.scss'

import Button from '../../UI/Button/Button'
import Logo from '../../../assets/vector/logo.svg'
import ContentItems from './ContentItems/ContentItems'


const Drawer = (props) => {

    const attachedClasses = [classes.DrawerWrapper]

    if (props.show) {
        attachedClasses.push(classes.show)
    } else {
        attachedClasses.push(classes.hide)
    }


    return (
        <div className={attachedClasses.join(' ')}>
            <aside className={classes.Drawer}>
                <div className={classes.Drawer__top}>
                    <img 
                        src={Logo}
                        alt='Логотип'
                        className={classes.DrawerLogo}
                    />
                    <Button 
                        func={props.switchFunc}
                        classType='ButtonHideDrawer'
                    >
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </Button>
                </div>
                <div className={classes.Drawer__middle}>
                    <ContentItems />
                </div>
            </aside>
            <div
                onClick={props.switchFunc}
                className={classes.DrawerOverlay}
            />
        </div>
    )
}

export default Drawer