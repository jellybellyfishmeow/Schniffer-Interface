import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Nav, NavItem, Navbar, Jumbotron, Button} from 'react-bootstrap';
import '../App.css';
import * as routes from '../constants/route';

const About = () => (
    <div>
        <Jumbotron className="welp"> 
            <h1>Schniffer</h1>
            <p>
                Welcome to Schniffer! Sign in to get started!
            </p>
            <p>
                <Button className="aboutButtons" bsStyle="info"><Link className="aboutButtons" to={routes.SIGN_IN}>Log in now!</Link></Button>
                <Button className="aboutButtons" bsStyle="primary"><Link className="aboutButtons" to={routes.SIGN_UP}>Or, Create an Account!</Link></Button>
            </p>
        </Jumbotron>
       
    </div>
)

const PageNav = () => (
      
      <Nav stacked className="aboutNav">
        <NavItem eventKey={1}>
          <Link className="NavLink" to={routes.ABOUT}>About</Link>
        </NavItem>
        <NavItem eventKey={2}>
          <Link className="NavLink" to={routes.DEVICES}>Set up</Link>
        </NavItem>
        
      </Nav>
  )

  export default About
