import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { mapStateToOrder } from '../actions/index'
import Profile from '../components/Profile';

export default connect(

    (state) => ({
        orders: 'orders'
    }),

    dispatch => ({
        handleRowClick: profileId => {
            dispatch(push(`/profiles/${profileId}`))
        }
    })
)(Profile)
