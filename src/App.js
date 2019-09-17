import React, { Component, lazy, Suspense } from 'react'
import 'normalize.css'
import './index.scss'
import { Switch, Route } from 'react-router-dom'
import Layout from './HOC/Layout/Layout'
import Loader from './components/UI/Loader/Loader'

const Home = lazy(() => import('./pages/Home/Home'))
const Cart = lazy(() => import('./pages/Cart/Cart'))
const Profile = lazy(() => import('./pages/Profile/Profile'))
const Products = lazy(() => import('./pages/Products/Products'))


class App extends Component {
    render() {
        return (
            <Layout>
                <Suspense fallback={<Loader/>} >
                    <Switch>
                        <Route path={'/'} exact component={Home} />
                        <Route path={'/catalog'} component={Products} />
                        <Route path={'/about'} component={Loader} />
                        <Route path={'/cart'} component={Cart} />
                        <Route path={'/profile'} component={Profile} />
                    </Switch>
                </Suspense>
            </Layout>
        )
    }
}

export default App