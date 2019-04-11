import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// redux
import { createStore } from 'redux'
import { Provider as Redux } from 'react-redux'
// routing
import { BrowserRouter as Router } from 'react-router-dom'

const store = createStore(() => {})

const application = (
    <Redux store={store} >
        <Router>
            <App /> 
        </Router>
    </Redux>
)

ReactDOM.render(
    application,
    document.querySelector('#store')
)