import React, { Component } from 'react';
import logo from '../resources/logo.jpg';
import ListProfilesViewLoader from '../containers/ListProfilesViewLoader';


class Home extends Component {

    constructor(props) {
      super(props);
  
    }

    hideProfiles = () => {
        this.setState(prevState => ({
          showProfiles: !prevState.showProfiles,
        }))
      }

    render() {
    
        return(
        <div>
            <header className="App-header">
                <img id="logo" src={logo} className="App-logo" alt="logo" />
                <br/>
                <h1 className="App-title">Meet the first place where you can contact marginalised people to help you with some task.</h1>
                <h1 className="App-title">You will strengthen their skills and help to build a more cohesive society.</h1>
            </header>


            <ListProfilesViewLoader />
        </div>
        );
    }

}

export default Home