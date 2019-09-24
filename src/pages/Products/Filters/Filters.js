import React, {PureComponent} from "react"
import classes from "./Filters.scss"
import ListOfProducers from "./ListOfProducers/ListOfProducers"

class Filters extends PureComponent {
    render() {
        return (
            <section className={classes.filters}>
                <p className={classes.title}>
                    <i className="fas fa-filter" />
                    <span>Фильтр</span>
                </p>
                <form>
                    <ListOfProducers />
                </form>
            </section>
        )
    }
}

export default Filters
