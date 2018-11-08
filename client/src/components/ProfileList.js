import React, { Component } from 'react'
import profilePicture from '../resources/cala.png'
import {Link} from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import './ProfileList.css'
import List from './List'
import PropTypes from 'prop-types'

const baseUri = 'http://localhost:8080/getProfiles';




const LoadingIndicator = () => <div className="loading-indicator">Loading...</div>;

class SingleProfile extends Component {

  static propTypes = {
    nation: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }

  render(){
  return (
    <Link to="/profile">
    <button className="profile_list" onClick={this.clickProfile}>
      <Container>
      <h4> Name</h4>
      <div id="uno">
        <img id="profile-pic" src={profilePicture}  alt="logo" />
      </div>
      <div id="dos">
      <h5>Nationality:</h5>
       <br/>
      <h4> {this.props.nation}</h4>
      <br/>

          <br/>
          <p id="description">{this.props.description} </p>

      </div>
      </Container>
    </button>
    </Link>
  );
  }
}

export default class ProfileList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      result: []
    };
    this.loadProfiles();
  }

  clickProfile  = (event) => {
    this.props.onSubmit(event.target.value)
  }

  loadProfiles() {
    this.props.onFetch()
      .then(state => {
        this.setState({isLoaded: true})
        console.log('updated state', this.props.profileInfo[0].nationality, state);
      })
      .catch(err => {
        console.log('Error while fetching profiles');
      });
  }
  
  renderProfile(id, nationality, description) {
    return (
      <SingleProfile
      key={id}
        nation={nationality}
        description={description} />
    )
  }
  
  render() {
    const { isLoaded} = this.state;
    console.log('isloaded', isLoaded)
    if(!isLoaded){
      return <h1><i>Loading profiles...}</i></h1>
    }
    return isLoaded
      ? 
      <List renderItem={this.renderProfile}
              items={this.props.profileInfo}
              // onLoadMoreClick={this.handleLoadMoreClick}
              loadingLabel={`Loading's starred...`} />
      :
    <div> nothing</div>
  }
}
