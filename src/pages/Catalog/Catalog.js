import React from "react"
import classes from "./Catalog.scss"

import { Link } from "react-router-dom"

import chimg from "../../assets/vector/suitcase.svg"
import purse from "../../assets/vector/purse.svg"
import backpack from "../../assets/vector/backpack.svg"
import handBag from "../../assets/vector/hand-bag.svg"

const Catalog = props => {
    return (
        <section className={classes.catalog}>
            <h1 className={classes.title}>
                Выберите нужную вам категорию товара
            </h1>
            <ul className={classes.catalog_list}>
                <li className={classes.catalog_item}>
                    <div className={classes.catalog_img}>
                        <img src={chimg} alt="Чемоданы" />
                    </div>
                    <div className={classes.container}>
                        <div className={classes.hover_box}>
                            <span>Чемоданы</span>
                            <Link to="/products">Далее</Link>
                        </div>
                    </div>
                    <p className={classes.sub}>Чемоданы</p>
                </li>
                <li className={classes.catalog_item}>
                    <div className={classes.catalog_img}>
                        <img src={handBag} alt="Сумки" />
                    </div>
                    <div className={classes.container}>
                        <div className={classes.hover_box}>
                            <span>Сумки</span>
                            <Link to="/products">Далее</Link>
                        </div>
                    </div>
                    <p className={classes.sub}>Сумки</p>
                </li>
                <li className={classes.catalog_item}>
                    <div className={classes.catalog_img}>
                        <img src={purse} alt="Кошельки" />
                    </div>
                    <div className={classes.container}>
                        <div className={classes.hover_box}>
                            <span>Кошельки</span>
                            <Link to="/products">Далее</Link>
                        </div>
                    </div>
                    <p className={classes.sub}>Кошельки</p>
                </li>
                <li className={classes.catalog_item}>
                    <div className={classes.catalog_img}>
                        <img src={backpack} alt="Рюкзаки" />
                    </div>
                    <div className={classes.container}>
                        <div className={classes.hover_box}>
                            <span>Рюкзаки</span>
                            <Link to="/products">Далее</Link>
                        </div>
                    </div>
                    <p className={classes.sub}>Рюкзаки</p>
                </li>
            </ul>
        </section>
    )
}

export default Catalog
