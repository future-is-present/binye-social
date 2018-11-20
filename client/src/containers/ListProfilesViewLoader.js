import { connect } from 'react-redux'
import { showProfile, fetchData, generateProfile} from '../actions'
import ListProfilesView from '../components/ListProfilesView';

const baseUri = 'http://localhost:8080/getProfiles';


const mapStateToProps = (state, ownProps) => {

    const {
        identity,
        dataArr
    } = state

    const profileInfo =  dataArr.response

    return {
        initialValues: identity.profile,
        dataArr,
        profileInfo
    }
  }
export default connect(

    mapStateToProps,

    dispatch => ({
        onSubmit: values => {
            dispatch(showProfile())
            //dispatch(push('/login')) // TODO: Not working 
        },
        getUser: async id => {
            const result = await dispatch(fetch(`${baseUri}`, { method: 'GET' }));
        },
        onFetch: async values => 
            dispatch(await fetchData()),
    })
)(ListProfilesView)
