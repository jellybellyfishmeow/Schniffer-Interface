import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Nav, NavItem, Navbar, Jumbotron, Button} from 'react-bootstrap';
import '../App.css';
import * as routes from '../constants/route';

const About = () => (
    <div>
        <PageNav />
        <Jumbotron className="welp"> 
            <h1>Schniffer</h1>
            <p>
                Welcome to Schniffer! Sign in to get started!
            </p>
            <p>
                <Button bsStyle="info"><Link to={routes.SIGN_IN}>Log in now!</Link></Button>
            </p>
        </Jumbotron>
        {/* jumbotron background of something?
            nav for each section
        */}
        <h3>why does security matter?</h3>
        <p>network monitoring is important</p>

        <h3>what is schniffer?</h3>
        <p>raspberry pi tool <span><a>link for pi</a></span></p>

        <h3>how do I set up schniffer?</h3>
        <p>instructions</p>

        <h3>who are we?</h3>
        <p>us two</p>
        {/*pic of us plus bios and shit*/}
        
    </div>
)

const PageNav = () => (
      
      <Nav stacked className="aboutNav">
        <NavItem eventKey={1}>
          <Link to={routes.ABOUT}>About</Link>
        </NavItem>
        <NavItem eventKey={2}>
          <Link to={routes.SIGN_IN}>Set up</Link>
        </NavItem>
        
      </Nav>
  )

  export default About
