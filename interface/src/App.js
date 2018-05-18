import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';
import constants from "./Components/constants";
import Navs from "./Components/nav";
import DashboardActivity from "./Components/DashboardActivity";
import LoginActivity from "./Components/LoginActivity";
import SignUpActivity from "./Components/SignUpActivity";
import NetworkMap from "./Components/NetworkMap";
import SpeedTest from './Components/SpeedTest';
import NetworkUsage from './Components/NetworkUsage';
import firebase from "firebase/app";
import "firebase/auth";

class App extends Component {
  render() {
    return (
      <div className="total">
        <Router>
          <Switch>
            <Route exact path={constants.routes.dashboard} component={DashboardActivity}/>
            <Route path={constants.routes.logIn} component={LoginActivity}/>
            <Route path={constants.routes.signUp} component={SignUpActivity}/>
            <Route path={constants.routes.networkMap} component={NetworkMap}/>
            <Route path={constants.routes.networkUsage} component={NetworkUsage}/>
            <Route path={constants.routes.speedTest} component={SpeedTest}/>

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;