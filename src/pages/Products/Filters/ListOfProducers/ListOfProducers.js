import React from 'react'
import classes from './ListOfProducers.scss'


const ListOfProducers = props => {



    const tempData = {
        producers: [
            {
                title: "Alba Soboni"
            },
            {
                title: "Desisan"
            },
            {
                title: "Karya" 
            },
            {
                title: "Kipling" 
            },
            {
                title: "POLO" 
            },
            {
                title: "Parfois" 
            },
            {
                title: "Parse" 
            },
        ],
        colors: [
            {
                title: "Розовый",
                bkg: "#ab3375"
            },
            {
                title: "Красный",
                bkg: "#e94d4d"
            },
            {
                title: "Коричневый",
                bkg: "#ab8333"
            },
            {
                title: "Синий",
                bkg: "#4486e3"
            },
            {
                title: "Черный",
                bkg: "#343434"
            },
        ],
        models: ["Через плечо", "Поясная"]
    }
   

    return (
        <>
        <div>
            <p className={classes.par}>Производитель</p>
            <ul className={classes.producer_list}>
                {
                    tempData.producers.map((el, ind) => {
                        return (
                            <li
                                key={ind} // они не денамичны!
                                className={classes.filter_item}
                            >
                                <label htmlFor={el.title + ind}>
                                    <input className={classes.root_input} type="checkbox" onChange={null} id={el.title + ind}/>
                                    <span className={classes.checkbox_indicator} />
                                    { el.title }
                                </label>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        <div>
            <p className={classes.par}>Цвета</p>
            <ul className={classes.producer_list}>
                {
                    tempData.colors.map((el, ind) => {
                        return (
                            <li
                                key={ind} // они не денамичны!
                                className={classes.filter_item}
                            >
                                <label htmlFor={el.title + ind}>
                                    <input className={classes.root_input} type="checkbox" onChange={null} id={el.title + ind}/>
                                    <span
                                        className={classes.checkbox_indicator}
                                        style={{backgroundColor: el.bkg}}
                                    />
                                    { el.title }
                                </label>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        <div>
            <p className={classes.par}>Модель</p>
            <ul className={classes.producer_list}>
                {
                    tempData.models.map((el, ind) => {
                        return (
                            <li
                                key={ind} // они не денамичны!
                                className={classes.filter_item}
                            >
                                <label htmlFor={el + ind}>
                                    <input className={classes.root_input} type="checkbox" onChange={null} id={el + ind}/>
                                    <span
                                        className={classes.checkbox_indicator}
                                    />
                                    { el }
                                </label>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        </>
    )
}

export default ListOfProducers;