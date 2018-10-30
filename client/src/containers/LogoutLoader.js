import React from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import { logout } from '../actions'


export default connect()(() => { logout(); return <p>logout...</p> })
