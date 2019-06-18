import React from 'react'
import classes from './UserInteraction.scss'

import CartPreview from '../CartPreview/CartPreview'
import Input from '../../../UI/Inputs/Input'
import Button from '../../../UI/Button/Button'

const UserInteraction = (props) => {

    const searchHandler = (event) => {
        event.preventDefault()
        console.log('BTN')
    }

    
    const itemsList = []

    // Это для теста!

    for (let j = 0; j <= 10; j++) {
        itemsList.push(
            {
                amount: Math.round(Math.random() * 5) + 1,
                price: 999,
                name:  "Some name some name"
            }
        )
    }

    return (
        <ul className={classes.UserInteraction}>
            <li className={classes.UserInteraction__search}>
                <form className={classes.SearchInputForm}>
                    <div className={classes.InputWrapper}>
                        <Input 
                            classType='NavSearch_Input'
                            description='Я ищу...'
                            type='text'
                        />
                    </div>
                    <div className={classes.ButtonWrapper}>
                        <Button
                            func={searchHandler} 
                            classType='NavSearch_Button'
                            type='submit'
                        >
                            <span>Поиск</span>
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </Button>
                    </div>
                </form>
            </li>
            <li className={classes.Container}>
                <div className={classes.UserInteraction__shop }>
                    <span className={classes._shopi}>
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    </span>
                    <span className={classes.SubText}>Корзина</span>
                    <CartPreview 
                        cartItems={itemsList} 
                    />
                </div>
                <div className={classes.UserInteraction__auth}>
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <span className={classes.SubText}>Личный кабинет</span>
                </div>
            </li>
        </ul>
    )
}

export default UserInteraction