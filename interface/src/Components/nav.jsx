import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Nav, NavItem} from 'react-bootstrap';
import firebase from "firebase/app";

const Navs = () => (
    <div>
       
        <div className="p-2 pl-3 d-flex justify-content-end">
            <button className="mr-auto p-2 btn logo" onClick={() => {this.props.history.push("/")}}><Image src="./logo-website.png" height="70" width="180" /></button>
            <button className="btn log" onClick={() => {this.props.history.push("/about")}}>about</button>
            <button className="btn log" onClick={() => {this.props.history.push("/login")}}>log in</button>
            <button className="btn log" onClick={() => {this.props.history.push("/signup")}}>sign up</button>
        </div>
        <div id="" className="" >
            <div className="sidebar-wrapper">
            <ul className="bs-docs-sidebar-holder col-md-3">
                <li className="bs-docs-sidenav nav">
                <button className="btn log"><Link to='/'>Dashboard</Link></button>
                </li>
                <li className="bs-docs-sidenav nav">
                <button className="btn log"><Link to='/networkMap'>Network Map</Link></button>
                </li>
                <li className="bs-docs-sidenav nav">
                <button className="btn log"><Link to='/speedTest'>SpeedTest</Link></button>
                </li>
                <li className="bs-docs-sidenav nav">
                <button className="btn log"><Link to='/networkUsage'>Network Usage</Link>
                </button>                       
                </li>

                <li className="bs-docs-sidenav nav">
                <button className="btn log"><Link to='/example'>Example</Link></button>
                </li>
            </ul>
            </div>
        </div>
    </div>
  )
  
export default Navs

