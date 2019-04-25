import React from 'react'
import classes from './Header.scss'

import HeaderItems from './HeaderItems/HeaderItems'
import Logo from '../../../assets/vector/logo.svg'
import Button from '../../UI/Button/Button'

const Header = (props) => {
    
    const { links, switchFunc } = props

    return (
        <header className={classes.PageHeader}>
            <nav className={classes.MainNavigation}>
                <div className={classes.LogoBox}>
                    <img src={Logo} alt="Логотип"/>
                </div>
                <Button
                    classType='BurgerMenuBtn'
                    func={switchFunc}
                >
                    <i className="fas fa-bars"></i>
                </Button>
                <HeaderItems
                    navigationItems={links} 
                />
            </nav>
        </header>
    )
}

export default Header