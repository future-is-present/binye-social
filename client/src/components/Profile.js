import React, { Component } from 'react'
import {Container } from 'semantic-ui-react'
import '../index.css'
import PropTypes from 'prop-types'
import profilePicture from '../resources/cala.png'


class Profile extends Component {
  constructor(props) {
    super(props);
    console.log('rednering profile')
  }

  
    render() {
      const { profileInfo, initialValues, dataArr, index } = this.props
      return (
        <div className="profile_list" >
        <Container>
        <h4> Name: </h4>
        <h3>{profileInfo.username}</h3>

        <div id="uno">
          <img id="profile-pic" src={profilePicture}  alt="logo" />
        </div>
        <div id="dos">
        <h5>Nationality:</h5>
         <br/>
        <h4> {profileInfo.nationality}</h4>
        <br/>
  
            <br/>
            <p id="description">{profileInfo.description} </p>
  
        </div>
          </Container>
        </div>
      );
    }
}

export default Profile;