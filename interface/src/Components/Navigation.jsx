import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Nav, NavItem, Navbar} from 'react-bootstrap';
import '../App.css';
import * as routes from '../constants/route';
import firebase from 'firebase';
import 'firebase/auth';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
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
    return(
      <div>
    { this.state.authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </div>
    )
  }
}

const NavigationNonAuth = () => (
  <Navbar fixedTop className="navMain">
    <Navbar.Header>
      <Link to={routes.LANDING}><Image src="./logo-website.png" height="50" width="199" href="/" /></Link>
    </Navbar.Header>
    <Nav pullRight>
      <NavItem eventKey={1}>
        <Link to={routes.ABOUT}>About</Link>
      </NavItem>
      <NavItem eventKey={2}>
        <Link to={routes.SIGN_IN}>Sign In</Link>
      </NavItem>
      
    </Nav>
  </Navbar>
)

const NavigationAuth = () => (
    <div>
        <Navbar fixedTop className="navMain">
            <Navbar.Header>
                <Link to={routes.LANDING}><Image src="./logo-website.png" height="50" width="199" href="/" /></Link>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1}>
                  <Link to={routes.LANDING}>Dashboard</Link>
                </NavItem>
                <NavItem eventKey={2} >
                  <Link to={routes.USAGE}>Network Usage</Link>
                </NavItem>
                <NavItem eventKey={3}>
                  <Link to={routes.SPEED}>Speed Test</Link>                
                </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={4}>
                <Link to={routes.ABOUT}>About</Link>
              </NavItem>
              <NavItem eventKey={5}>
                <button className="btn log" onClick={() => firebase.auth().signOut().catch(err => alert(err.message))}>log out</button>
              </NavItem>
            </Nav>
        </Navbar>
    </div>
)
  

