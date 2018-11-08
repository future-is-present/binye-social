import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Orders from '../components/Orders'
import { mapStateToOrder } from '../actions/index'

export default connect(

    (state) => ({
        orders: Object.values(state.orders)
            .map(order => mapStateToOrder(order, state))
    }),

    dispatch => ({
        handleRowClick: txId => {
            dispatch(push(`/orders/${txId}`))
        }
    })
)(Orders)
