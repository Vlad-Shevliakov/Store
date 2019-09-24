import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
// redux
import {createStore, compose, applyMiddleware} from "redux"
import {Provider as Redux} from "react-redux"
import thunk from "redux-thunk"
import rootReducer from "./redux/rootReducer"
// routing
import {BrowserRouter as Router} from "react-router-dom"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

const application = (
    <Redux store={store}>
        <Router>
            <App />
        </Router>
    </Redux>
)

ReactDOM.render(application, document.querySelector("#store"))
