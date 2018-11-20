import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { mapStateToOrder } from '../actions/index'
import Profile from '../components/Profile';



const mapStateToProps = (state) => {

    const {
        identity,
        dataArr
    } = state
    const profileInfo =  dataArr.response[0]
    return {
        initialValues: identity.profile,
        dataArr,
        profileInfo
    }
  }
export default connect(

    mapStateToProps,

    dispatch => ({
        handleRowClick: profileId => {
            dispatch(push(`/profiles/${profileId}`))
        }
    })
)(Profile)
