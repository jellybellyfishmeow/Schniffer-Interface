import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Image} from 'react-bootstrap';
import firebase from "firebase/app";


const Nav = () => (
    <div>
        <div className="p-2 pl-3 d-flex justify-content-end">
            <button className="mr-auto p-2 btn logo" onClick={() => {this.props.history.push("/")}}><Image src="./sniff.png" height="100" width="100" /></button>
            <button className="btn log" onClick={() => {this.props.history.push("/about")}}>about</button>
            <button className="btn log" onClick={() => {this.props.history.push("/login")}}>log in</button>
            <button className="btn log" onClick={() => {this.props.history.push("/signup")}}>sign up</button>
        </div>
        <div id="" className="sidebar" >
            <div className="sidebar-wrapper">
            <ul className="bs-docs-sidebar-holder col-md-3">
                <li className="bs-docs-sidenav nav">
                <button className="btn log" onClick={() => {this.props.history.push("/")}}>Dashboard</button>
                </li>
                <li className="bs-docs-sidenav nav">
                <button className="btn log" onClick={() => {this.props.history.push("/networkMap")}}>Network Map</button>
                </li>
                <li className="bs-docs-sidenav nav">
                <button className="btn log" onClick={() => {this.props.history.push("/SpeedTest")}}>Speed Test</button>
                </li>
                <li className="bs-docs-sidenav nav">
                <Link to='/NetworkUsage'>
                <button className="btn log">Network Usage
                </button>                       
                </Link>
                </li>
            </ul>
            </div>
        </div>
    </div>
  )
  
export default Nav

