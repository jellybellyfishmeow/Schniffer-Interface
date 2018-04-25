import React, { Component } from 'react';
import './App.css';

import { HashRouter as Router, Switch, Route} from 'react-router-dom';
import constants from "./Components/constants";
import DashboardActivity from "./Components/DashboardActivity";
import LogInActivity from "./Components/LoginActivity";
import SignUpActivity from "./Components/SignUpActivity";
import NetworkMap from "./Components/NetworkMap";
import SpeedTest from './Components/SpeedTest';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path={constants.routes.dashboard} component={DashboardActivity}/>
            <Route path={constants.routes.logIn} component={LogInActivity}/>
            <Route path={constants.routes.signUp} component={SignUpActivity}/>
            <Route path={constants.routes.networkMap} component={NetworkMap}/>
            <Route path={constants.routes.SpeedTest} component={SpeedTest}/>

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
