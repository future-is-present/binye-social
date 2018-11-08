import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

import identity from './identity'
const initialState = {
    no: 'no'
}
const dataArr = (state = initialState, action) => {
    switch(action.type){
        case "FETCH_DATA_SUCCESS":
            return Object.assign({}, state, {
                response: action.payload,
            })    
        default: return Object.assign({}, state, {
            password: 'action.password',
            name: 'action.name',
        })
    }
}

const appReducer = combineReducers({
    form: formReducer,
    router: routerReducer,
    identity,
    dataArr,
})

export default appReducer