import React, { Component } from 'react'
import profilePicture from '../resources/cala.png'
import {Link} from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import './ListProfilesView.css'
import List from './List'

const baseUri = 'http://localhost:8080/getProfiles';




const LoadingIndicator = () => <div className="loading-indicator">Loading...</div>;


const SingleView = ({ nation, description, username }) => {
    return (
      <Link to={`/profile/${username}`}>
      <button className="profile_list" onClick={this.clickProfile}>
        <Container >
        <h4> Name: {username}</h4>
        <div id="uno">
          <img id="profile-pic" src={profilePicture}  alt="logo" />
        </div>
        <div id="dos">
        <h5>Nationality:</h5>
         <br/>
        <h4> {nation}</h4>
        <br/>
  
            <br/>
            <p id="description">{description} </p>
  
        </div>
        </Container>
      </button>
      </Link>
  )
}
export default class ListProfilesView extends Component {

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
        console.log('updated state', state);
      })
      .catch(err => {
        console.log('Error while fetching profiles');
      });
  }
  
  renderView(id, username, nationality, description) {
    return (
      <SingleView
      key={id}
      myKey={id}
      username={username}
        nation={nationality}
        description={description}
         />
    )
  }
  
  render() {
    const { isLoaded} = this.state;
    if(!isLoaded){
      return <h1><i>Loading profiles...}</i></h1>
    }
    return isLoaded
      ? 
      <List renderItem={this.renderView}
              items={this.props.profileInfo}
              // onLoadMoreClick={this.handleLoadMoreClick}
              loadingLabel={`Loading's starred...`} />
      :
    <div> nothing</div>
  }
}
