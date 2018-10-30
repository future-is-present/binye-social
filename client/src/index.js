/* eslint-disable no-unused-vars */
import React from 'react'
import { Provider } from 'react-redux'

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createHistory from 'history/createBrowserHistory' // eslint-disable-line import/no-extraneous-dependencies
import thunk from 'redux-thunk'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import appReducer from './reducers'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router }    from 'react-router-dom';
import App from './components/App'
import 'react-virtualized/styles.css' // This only needs to be done once;


/* eslint-enable no-unused-vars */

const history = createHistory()

const store = createStore(
    appReducer,
    composeWithDevTools(applyMiddleware(
        thunk,
        routerMiddleware(history)
    ))
)

// Render Setup
// ------------------------------------




ReactDOM.render(
 <Provider store={store}>
  <Router>
        <App />
    </Router>
 </Provider>,
 document.getElementById('root')
);
registerServiceWorker();