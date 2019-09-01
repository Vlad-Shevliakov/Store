import React from 'react'
import classes from './Header.scss'
import HeaderItems from './HeaderItems/HeaderItems'
import Button from '../../UI/Button/Button'
import { Link } from 'react-router-dom'

const Header = (props) => {
    
    const { links, switchFunc } = props

    return (
        <header className={classes.PageHeader}>
            <nav className={classes.MainNavigation}>
                <Link to='/' className={classes.title}>
                    Bagson
                </Link>
                <Button
                    classType='BurgerMenuBtn'
                    func={switchFunc}
                />
                <HeaderItems
                    navigationItems={links} 
                />
            </nav>
        </header>
    )
}

export default Header