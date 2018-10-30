import { connect } from 'react-redux'
import Login from '../components/Login'
import { push } from 'react-router-redux'
import { generateProfile } from '../actions'



export default connect(

    state => ({
        initialValues: state.identity.profile
    }),

    dispatch => ({
        onSubmit: values => {
            dispatch(generateProfile())
            dispatch(push('/profile'))
        },
        filterUser: values => {
            dispatch(generateProfile(values.email))
            dispatch(push('/'))
        }

    })
)(Login)

