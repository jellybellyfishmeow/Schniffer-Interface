import React, { Component } from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import { Grid, Row, Col} from 'react-bootstrap';

import Navs from "./Components/nav";
import DashboardActivity from "./Components/DashboardActivity";
import LogInActivity from "./Components/LoginActivity";
import SignUpActivity from "./Components/SignUpActivity";
import NetworkMap from "./Components/NetworkMap";
import SpeedTest from './Components/SpeedTest';
import NetworkUsage from './Components/NetworkUsage';


class App extends Component {
  render() {
    let style = {
      background: "green"
    }
    let style2 = {
      background: "red"
    }
    return (
      <div>
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={4} style={style}>
            <Navs />
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}

export default App;
