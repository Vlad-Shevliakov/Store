import React, { Component } from 'react'
import './normalize.scss'
import { Switch, Route } from 'react-router-dom'
import Layout from './HOC/Layout/Layout'

import Home from './pages/Home/Home'

// тест
const Products = () => (
    <h1 style={{
        top: '70px',
        left: '50%'
    }}>Товары</h1>
)
const About = () => (
    <h1 style={{
        top: '70px',
        left: '50%'
    }}>О нас</h1>
)


const App = class extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path={'/'} exact component={Home} />
                    <Route path={'/products'} component={Products} />
                    <Route path={'/about'} component={About} />
                </Switch>
            </Layout>
        )
    }
}

export default App