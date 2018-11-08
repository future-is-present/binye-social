import React, { Component } from 'react';
import logo from '../resources/logo.jpg';
import ProfileListLoader from '../containers/ProfileListLoader';


class Home extends Component {

    constructor(props) {
      super(props);

      this.state ={
        showProfiles : true,
        listProfiles : []
      }
  
      this.state.listProfiles.push("asdf")
      this.hideProfiles = this.hideProfiles.bind(this)

    }

    // componentDidMount() {
    //     fetch('/users')
    //       .then(res => res.json())
    //       .then(listProfiles => this.setState({ listProfiles }));
    //   }

    hideProfiles(){
        this.setState(prevState => ({
          showProfiles: !prevState.showProfiles,
        }))
      }

    render() {
        // for (var i = 0; i < 2; i++) {
        //     this.state.listProfiles.push(<ProfileList key={i} />);
        // }
    
        console.log("List of profiles", this.state.listProfiles)
        return(
        <div>
            <header className="App-header">
                <img id="logo" src={logo} className="App-logo" alt="logo" />
                <br/>
                <h1 className="App-title">Meet the first place where you can contact marginalised people to help you with some task.</h1>
                <h1 className="App-title">You will strengthen their skills and help to build a more cohesive society.</h1>
            </header>


            <ProfileListLoader />
        </div>
        );
        // { this.state.showProfiles ? this.state.listProfiles : null };
    }

}

export default Home