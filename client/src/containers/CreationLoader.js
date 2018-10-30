import {
    connect
} from 'react-redux'
import {
    push
} from 'react-router-redux'

import {
    submitProfile
} from '../actions'
import Creation from '../components/Creation'


export default connect(

    state => ({
        initialValues: { name: state.identity.name,
            origin: state.identity.origin,
            history: state.identity.history
        }
    }),

    dispatch => ({
        onSubmit: values => {
            console.log('submiting form')
            dispatch(submitProfile(values))
            dispatch(push('/'))
        }
    })

)(Creation)