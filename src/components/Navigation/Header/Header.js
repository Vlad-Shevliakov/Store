import React from 'react'
import classes from './Header.scss'

import HeaderItems from './HeaderItems/HeaderItems'
import Logo from '../../../assets/vector/suitcase3.svg'

const Header = (props) => {
    
    const { links } = props

    return (
        <header className={classes.PageHeader}>
            <nav className={classes.MainNavigation}>
                <div className={classes.LogoBox}>
                    <img src={Logo} alt="Логотип"/>
                </div>
                <HeaderItems
                    navigationItems={links} 
                />
            </nav>
        </header>
    )
}

export default Header