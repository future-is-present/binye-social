import React, { Component } from 'react'
import profilePicture from '../resources/cala.png'
import {Link, BrowserRouter} from 'react-router-dom'
import { Button, Container } from 'semantic-ui-react'
import './ProfileList.css'

const baseUri = 'http://localhost:3701';

const backend = {
  async get(symbol) {
    const response = await fetch(`${baseUri}/profiles`);
    return await response.json();
  },
};

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
      <Button primary as={Link} to="/profile">
            .
        </Button>
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
      isLoaded: false
    };
    this.clickProfile = this.clickProfile.bind(this); 
  }

  clickProfile (event) {
    this.props.onSubmit(event.target.value)
  }
  
  fetchData = async () => {
    const { symbol } = this.props;

    const result = await backend.get('all');

    if (result != null) {
      this.setState({
        ...result,
        isLoaded: true,
      });
    }
  };

  render() {

    const { isLoaded, symbol, latestPrice } = this.state;
    
    return isLoaded
      ? <SingleProfile symbol={symbol} price={latestPrice} />
      : <LoadingIndicator />;
    }
}

