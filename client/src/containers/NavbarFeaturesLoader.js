import { connect } from 'react-redux'
import NavbarFeatures from '../components/NavbarFeatures'


export default connect(
    state => {
        return ({
            ...state.identity.profile
        })
    }
)(NavbarFeatures)
