import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

import identity from './identity'

const appReducer = combineReducers({
    form: formReducer,
    router: routerReducer,
    identity,
})

export default appReducer