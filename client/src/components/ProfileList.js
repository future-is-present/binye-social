import React, { Component } from 'react'
import profilePicture from '../resources/cala.png'
import {Link} from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import './ProfileList.css'

const baseUri = 'http://localhost:8080/getProfiles';




const LoadingIndicator = () => <div className="loading-indicator">Loading...</div>;

class SingleProfile extends Component {

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
      <h5>Nationality</h5>
       <br/>
      <h4> Bulgaria</h4>
      <br/>

          <br/>
          <p id="description">I’m originally from Nigeria and I had been living in Libya for five years when the war broke out. 
            I had a good life: I was working as a tailor and I earned enough to send money home to loved ones. 
            But after the fighting started, people like us – black people – became very vulnerable, because all the 
            youth had weapons and they knew we had money in our houses and they could rob us. If you went out for something 
            to eat, a gang would stop you and ask if you supported them. They might be rebels, they might be government, 
            you didn’t know.   </p>

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
        console.log('updated state');
      })
      .catch(err => {
        console.log('Error while fetching profiles');
      });
  }
  
  
  render() {
    const { isLoaded, symbol, latestPrice } = this.state;
    console.log('isloaded', isLoaded)
    return isLoaded
      ? 
    <div> nothing</div>
    : <SingleProfile symbol={symbol} price={latestPrice} />
  }
}

