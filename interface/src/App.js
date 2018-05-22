import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/auth';
import * as routes from './constants/route';
import DashboardActivity from "./Components/DashboardActivity";
import LoginActivity from "./Components/LoginActivity";
import About from "./Components/about";
import SpeedTestPage from './Components/SpeedTestPage';
import NetworkUsage from './Components/NetworkUsage';
import Navigation from './Components/Navigation';
import DevicesModal from './Components/DevicesModal';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: "meow",
    };
  }
  
  componentDidMount() {
    firebase.auth().onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    });
  }

    render() {
      return (
        <Router>
            <div className="total">
            <Navigation authUser={this.state.authUser} />

              <Navigation />
              <hr/>
              <Route
                exact path={routes.LANDING}
                component={() => <DashboardActivity />}
              />
              <Route
                exact path={routes.SPEED}
                component={() => <SpeedTestPage />}
              />
              <Route
                exact path={routes.SIGN_IN}
                component={() => <LoginActivity />}
              />
              <Route
                exact path={routes.USAGE}
                component={() => <NetworkUsage />}
              />
            
              <Route
                exact path={routes.ABOUT}
                component={() => <About />}
              />
            
            </div>
          </Router>
      )
    }
  }
