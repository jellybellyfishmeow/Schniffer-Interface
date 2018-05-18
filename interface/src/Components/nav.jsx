import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Nav, NavItem, Grid, Row, Col, Navbar} from 'react-bootstrap';
import firebase from "firebase/app";
import '../App.css';
import constants from "./constants";


function handleSelect(selectedKey) {
    alert(`selected ${selectedKey}`);
}


const Navs = () => (
    <div>
        <Navbar fixedTop className="navMain">
            <Navbar.Header>
                <Navbar.Brand>
                <Image src="./logo-website.png" height="100" width="120" href="/" />
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1}></NavItem>
                <NavItem eventKey={2} href="/networkMap">
                Network Map
                </NavItem>
                <NavItem eventKey={3} href="/networkUsage">
                Network Usage
                </NavItem>
                <NavItem eventKey={4}>
                    <Link to={constants.routes.speedTest}>Speed Test</Link>                
                </NavItem>
            </Nav>
            <Nav pullRight>
                <NavItem eventKey={1} href="#">
                    About Schniffer
                </NavItem>
                <NavItem eventKey={2} href="/login">
                    Sign In
                </NavItem>
                <NavItem eventKey={3} href="">
                    Sign Up
                </NavItem>
            </Nav>
        </Navbar>
    </div>
)
  
export default Navs

