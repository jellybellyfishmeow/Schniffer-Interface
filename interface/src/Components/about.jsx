import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Nav, NavItem, Navbar, Jumbotron, Button} from 'react-bootstrap';
import SignOut from "./SignOutActivity";
import '../App.css';
import * as routes from '../constants/route';

const About = () => (
    <div>
        <PageNav />
        <Jumbotron>
            <h1>Schniffer</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
                <Button bsStyle="info"><Link to={routes.SIGN_IN}>Log in now!</Link></Button>
            </p>
        </Jumbotron>;
        {/* jumbotron background of something?
            nav for each section
        */}
        <h3>why network monitoring</h3>
        <p>network monitoring is important</p>

        <h3>what is schniffer?</h3>
        <p>raspberry pi tool <span><a>link for pi</a></span></p>

        <h3>how do I set up schniffer?</h3>
        <p>instructions</p>

        <h3>who we are</h3>
        <p>us two</p>

    </div>
)


const PageNav = () => (
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

  export default About
