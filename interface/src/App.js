import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import * as routes from './constants/route';
import DashboardActivity from "./Components/DashboardActivity";
import LoginActivity from "./Components/LoginActivity";
import About from "./Components/about";
import SpeedTest from './Components/SpeedTest';
import NetworkUsage from './Components/NetworkUsage';
import Navigation from './Components/Navigation';

const App = () =>
  <Router>
    <div className="total">
      <Navigation />
      <hr/>
      <Route
        exact path={routes.LANDING}
        component={() => <DashboardActivity />}
      />
      <Route
        exact path={routes.SPEED}
        component={() => <SpeedTest />}
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

export default App;