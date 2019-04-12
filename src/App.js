import React, { Component } from 'react'
import './normalize.scss'
import { Switch, Route } from 'react-router-dom'
import Layout from './HOC/Layout/Layout'


// тест
const Home = () => (
    <h1 style={{
        position: 'absolute',
        top: '70px',
        left: '20px'
    }}>Главная</h1>
)
const Products = () => (
    <h1 style={{
        position: 'absolute',
        top: '70px',
        left: '20px'
    }}>Товары</h1>
)
const About = () => (
    <h1 style={{
        position: 'absolute',
        top: '70px',
        left: '20px'
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