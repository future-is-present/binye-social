import { connect } from 'react-redux'
import NavbarFeatures from '../components/NavbarFeatures'

const mapStateToProps = (state, ownProps) => {

    const {
        identity,
        dataArr
    } = state

    const profileInfo =  dataArr.response

    return {
        initialValues: identity.profile,
        identity,
        dataArr,
        profileInfo
    }
  }

export default connect(
    mapStateToProps
)(NavbarFeatures)
