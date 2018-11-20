import { connect } from 'react-redux'
import Login from '../components/Login'
import { push } from 'react-router-redux'
import { generateProfile } from '../actions'


// export const loginUser = dispatch => {
//     return (email, password) => {
//         // this works because when the button is clicked,
//         // I can successfully console log in here.
//         dispatch(generateProfile()) // THIS DISPATCH IS NOT WORKING
//         // API call here...
//     }
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         onSubmit: loginUser(dispatch)
//     }
// };

export default connect(

    // mapStateToProps
    state => ({
        initialValues: state.identity.profile
    }),
    //mapDispatchToProps
    dispatch => ({
        onSubmit: values => {
            dispatch(generateProfile(values))
        },
        filterUser: values => {
            dispatch(generateProfile(values.email))
            dispatch(push('/'))
        }

    })
)(Login)

