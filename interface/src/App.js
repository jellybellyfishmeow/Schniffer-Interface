import React, { Component } from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';

import Navs from "./Components/nav";
import DashboardActivity from "./Components/DashboardActivity";
import LogInActivity from "./Components/LoginActivity";
import SignUpActivity from "./Components/SignUpActivity";
import NetworkMap from "./Components/NetworkMap";
import SpeedTest from './Components/SpeedTest';
import NetworkUsage from './Components/NetworkUsage';
import firebase from "firebase/app";
require('firebase/auth')


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      authenticated: firebase.auth().currentUser != null
    };
  }

  componentDidMount() {
      
  }
  

  componentWillUnmount() {
    this.authSubscription();
  }
  render() {
    // The application is initialising
    if (this.state.loading) return null;
    // The user is an Object, so they're logged in
    if (this.state.user) return <div className="total">
        <Navs />
      </div>;
    // The user is null, so they're logged out
    return <LogInActivity />;
  }
}
