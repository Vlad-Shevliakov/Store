import React, { PureComponent } from 'react'
import classes from './Cart.scss'
import { connect } from 'react-redux'
import * as cart from '../../redux/actions/cartAction'

import Orders from './Orders/Orders'
import Summary from './Summary/Summary'

const Cart = class extends PureComponent {



    componentDidMount() {
        this.calculationOfTheAmount()
    }

    componentDidUpdate(prevProps, prevState) {
        this.calculationOfTheAmount()
    }


    calculationOfTheAmount = () => {
        const amount = this.props.ordersList.reduce((count, order) => {
            return count += order.price 
        }, 0)
        this.props.totalAmount(amount)
    }
    

    render() {

        return (
            <div className={classes.Cart}>                
                <div className={classes.cart_container}>
                    <Orders
                        orders={this.props.ordersList}
                        removeHandler={this.props.removeOrder}
                    />
                    <Summary 
                        totalSumm={this.props.totalSumm}
                    />
                </div>
            </div>
        )

    }
}


const mapStateToProps = store => {
    return {
        ordersList: store.cart.orders,
        totalSumm: store.cart.amount
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeOrder: (code) => dispatch(cart.removeOrder(code)),
        totalAmount: (amount) => dispatch(cart.priceCalculation(amount))
    } 
}



export default connect(mapStateToProps, mapDispatchToProps)(Cart)