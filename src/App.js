import React, { Component } from 'react'
import './normalize.scss'

import Layout from './HOC/Layout/Layout'


// тест


const App = class extends Component {
    // Switch после layout
    render() {
        return (
            <Layout>

            </Layout>
        )
    }
}

export default App