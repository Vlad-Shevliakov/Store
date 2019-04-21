import React from 'react'
import Header from '../../components/Navigation/Header/Header'
import { connect } from 'react-redux'
import Drawer from '../../components/Navigation/Drawer/Drawer'
import * as Head from '../../redux/actions/headAction'

const Layout = props => {

    const links = [
        { text: 'Главная', to: '/', exact: true },
        { text: 'Товары', to: '/products', exact: false },
        { text: 'О нас', to: '/about', exact: false },
    ]
    console.log(props)
    return (
        <div>
            <Drawer
                show={props.showDrawer}
                switchFunc={props.switchDrawer} 
                links={links} 
            />
            <Header
                links={links}
                switchFunc={props.switchDrawer}
            />
            <main>
                { props.children }
            </main>
            {/* /////////// */}
            <footer style={
                {   width: '100%',
                    height: '1300px',
                    backgroundColor: '#fff'
                }}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        showDrawer: state.head.showDrawer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        switchDrawer: () => dispatch(Head.switchDrawer())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)