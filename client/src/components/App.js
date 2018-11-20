import React from 'react';
import '../App.css';
import { Route } from 'react-router-dom'
import NavbarFeatures from './NavbarFeatures'
import LogoutLoader from '../containers/LogoutLoader'
import Home from './Home'
import {PrivateRoute} from './PrivateRoute'
import LoginLoader from "../containers/LoginLoader";
import CreationLoader from '../containers/CreationLoader';
import ListProfilesViewLoader from '../containers/ListProfilesViewLoader';
import NavbarFeaturesLoader from '../containers/NavbarFeaturesLoader';

const App = () => (
  <div>
      <Route component={NavbarFeaturesLoader}/>

      
      <PrivateRoute exact path="/" component={Home}/>
      <Route exact path="/login" component={LoginLoader}/>
      <Route path="/profile" component={ListProfilesViewLoader} />
      <Route path="/logout" component={LogoutLoader}/>
      <Route path="/create" component={CreationLoader}/>

  </div>
)

export default App
