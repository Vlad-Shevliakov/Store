import React, { Component } from 'react'
import './normalize.scss'
import { Switch, Route } from 'react-router-dom'
import Layout from './HOC/Layout/Layout'

import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Profile from './pages/Profile/Profile'

// тест
const Products = () => (
    <h1 style={{
        top: '70px',
        left: '50%',
        textAlign: 'center'
    }}>Товары</h1>
)
const About = () => (
    <h1 style={{
        top: '70px',
        left: '50%',
        textAlign: 'center'
    }}>О нас</h1>
)


class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path={'/'} exact component={Home} />
                    <Route path={'/products'} component={Products} />
                    <Route path={'/about'} component={About} />
                    <Route path={'/cart'} component={Cart} />
                    <Route path={'/profile'} component={Profile} />
                </Switch>
            </Layout>
        )
    }
}

export default App