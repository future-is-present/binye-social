import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { showProfile } from '../actions/index'
import ProfileList from '../components/ProfileList';

export default connect(

    (state) => ({
        initialValues: state.identity.profile
    }),

    dispatch => ({
        onSubmit: values => {
            // console.log('ee')
            dispatch(showProfile())
            //dispatch(push('/login')) // TODO: Not working 
        }
    })
)(ProfileList)
