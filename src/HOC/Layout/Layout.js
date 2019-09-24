import React from "react"
import classes from "./Layout.scss"
import {connect} from "react-redux"
import Drawer from "../../components/Navigation/Drawer/Drawer"
import Header from "../../components/Navigation/Header/Header"
import Footer from "../../components/Footer/Footer"
import * as Head from "../../redux/actions/headAction"

const Layout = props => {
    const links = [
        {text: "Главная", to: "/", exact: true},
        {text: "Каталог", to: "/catalog", exact: false},
        {text: "О нас", to: "/about", exact: false}
    ]

    return (
        <div className={classes.Layout}>
            <Drawer show={props.showDrawer} switchFunc={props.switchDrawer} />
            <Header links={links} switchFunc={props.switchDrawer} />
            <main>{props.children}</main>
            <Footer />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        showDrawer: state.head.showDrawer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        switchDrawer: () => dispatch(Head.switchDrawer())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Layout)
