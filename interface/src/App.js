import React, { Component } from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import Nav from "./Components/nav";
import DashboardActivity from "./Components/DashboardActivity";
import LogInActivity from "./Components/LoginActivity";
import SignUpActivity from "./Components/SignUpActivity";
import NetworkMap from "./Components/NetworkMap";
import SpeedTest from './Components/SpeedTest';
import NetworkUsage from './Components/NetworkUsage';


class App extends Component {
  render() {
    return (
      <div>
        <Nav />
      </div>
    );
  }
}

export default App;
