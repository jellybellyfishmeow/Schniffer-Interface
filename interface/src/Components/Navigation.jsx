import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Nav, NavItem, Grid, Row, Col, Navbar} from 'react-bootstrap';
import firebase from "firebase/app";
import '../App.css';
import * as routes from '../constants/route';



const Navigation = () => (
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
                <NavItem eventKey={4}>
                  <Link to={routes.SPEED}>Speed Test</Link>                
                </NavItem>
            </Nav>
            <Nav pullRight>
            <NavItem eventKey={3}>
                <Link to={routes.ABOUT}>About</Link>
                </NavItem>
                <NavItem eventKey={3}>
                <Link to={routes.SIGN_IN}>Sign In</Link>
                </NavItem>
                <NavItem eventKey={3}>
                <Link to={routes.SIGN_UP}>Sign Up</Link>
                </NavItem>
            </Nav>
        </Navbar>
    </div>
)
  
export default Navigation

