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
import Navigation from './Components/Navigation';
import PrivateRoute from './Components/PrivateRoute';
import Malicious from './Components/malicious';
import ModalView from './Components/modalView';
import {Footer, Container} from 'mdbreact';
import BestPractices from './Components/bestPractice';
import SignUp from './Components/SignUpActivity';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true, 
      authenticated: false, 
      user: null
    };
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }
 
    render() {
      const { authenticated, loading } = this.state;

      if (loading) {
        return <p>Loading..</p>;
      }
      return (
        <Router>
            <div className="total">
              <Navigation />
              <hr/>
             
                  <PrivateRoute exact path="/" 
              component={DashboardActivity} 
              authenticated={this.state.authenticated}/>
              
              <PrivateRoute exact path="/speedtest" 
              component={SpeedTestPage} 
              authenticated={this.state.authenticated}/>
             
            <PrivateRoute exact path="/devices" 
              component={ModalView} 
              authenticated={this.state.authenticated}/>
             
             <PrivateRoute exact path="/malicious" 
              component={Malicious} 
              authenticated={this.state.authenticated}/>

              <Route
                exact path={routes.SIGN_IN}
                component={() => <LoginActivity />}
              />
            <Route
                exact path={routes.SIGN_UP}
                component={() => <SignUp  />}
              />
              <Route
                exact path={routes.ABOUT}
                component={() => <About />}
              />
              <Route
                exact path={routes.BEST}
                component={() => <BestPractices />}
              />
              <hr />
              <Foot />
            </div>
          </Router>
      )
    }
  }


  const Foot = () => (
    <div className="foot">
        <div className="footer-copyright text-center">
          <Container fluid>
              &copy; {(new Date().getFullYear())} Copyright: Jingyu Yang & Jason Peacher-Ton
              <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from
               <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed
                by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" 
                target="_blank">CC 3.0 BY</a></div>
          </Container>
      </div>
      </div>
  )