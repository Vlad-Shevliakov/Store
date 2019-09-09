import React from 'react'
import classes from './ListOfProducers.scss'


const ListOfProducers = props => {
    return (
        <>
        <p>Продавец</p>
        <ul className={classes.producer_list}>
            <li className={classes.producer}>
                <label htmlFor="p1">
                    <input id="p1" type="checkbox"/>
                    Один
                </label>
            </li>
            <li className={classes.producer}>
                <label htmlFor="p2">
                    <input id="p2" type="checkbox"/>
                    Два
                </label>
            </li>
            <li className={classes.producer}>
                <label htmlFor="p3">
                    <input id="p3" type="checkbox"/>
                    Три
                </label>
            </li>
        </ul>
        </>
    )
}

export default ListOfProducers;