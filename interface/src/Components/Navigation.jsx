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
      <Link className="NavLink" to={routes.LANDING}><Image src="./meow.png" height="40" width="150" href="/" /></Link>
    </Navbar.Header>
    <Nav pullRight>
      <NavItem eventKey={1}>
        <Link className="NavLink" to={routes.ABOUT}>About</Link>
      </NavItem>
      <NavItem eventKey={2}>
        <Link className="NavLink" to={routes.SIGN_IN}>Sign In</Link>
      </NavItem>
      <NavItem eventKey={3}>
        <Link className="NavLink" to={routes.SIGN_UP}>Sign Up</Link>
      </NavItem>
      
    </Nav>
  </Navbar>
)

const NavigationAuth = () => (
    <div>
        <Navbar fixedTop className="navMain">
            <Navbar.Header>
                <Link className="NavLink" to={routes.LANDING}><Image src="./meow.png" height="40" width="150" href="/" /></Link>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1}>
                  <Link className="NavLink" to={routes.LANDING}>Dashboard</Link>
                </NavItem>
                
                <NavItem eventKey={3}>
                  <Link className="NavLink" to={routes.MALICIOUS}>Suspicious Activity Log</Link>                
                </NavItem>
                <NavItem eventKey={4}>
                  <Link className="NavLink" to={routes.SPEED}>Speed Test</Link>                
                </NavItem>
                <NavItem eventKey={5}>
                  <Link className="NavLink" to={routes.DEVICES}>Network Devices</Link>
                </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={4}>
                <Link className="NavLink" to={routes.BEST}>Best Practices</Link>
              </NavItem>
              <NavItem eventKey={5}>
                <button className="btn log" onClick={() => firebase.auth().signOut().catch(err => alert(err.message))}>log out</button>
              </NavItem>
            </Nav>
        </Navbar>
    </div>
)
  

