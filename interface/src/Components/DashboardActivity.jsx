import React from "react";
import { Table, Image} from 'react-bootstrap';
import {Link, Redirect} from "react-router-dom";
import constants from "./constants";
import firebase from "firebase/app";
import DChart from "./Chart";


export default class DashboardActivity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    
    render() {
        let style = {
            position: "absolute",
            margin: "auto",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0"
        }
        return (
          
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
                        <button className="btn log" onClick={() => {this.props.history.push("/")}}>Speed Test</button>
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="cont d-flex justify-content-center" style={style}>              
            
                    <div className="card align-self-center">
                      <hr />
                      <DChart />
                      <hr />
                      <Table striped bordered condensed hover>
                          <thead>
                          <tr>
                            <th>Date</th>
                            <th>Device</th>
                            <th>Activity</th>
                            <th>Action</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td>03/01/2018</td>
                            <td>Macbook-1</td>
                            <td>343gb download</td>
                            <td>check files downloaded</td>
                          </tr>
                          <tr>
                            <td>02/13/2018</td>
                            <td>iPhone-3nc5x</td>
                            <td>3 consequtive whois sent</td>
                            <td>check network connection</td>
                          </tr>
                          <tr>
                            <td>02/09/2018</td>
                            <td>Jennys iPhone</td>
                            <td>10mb upload to suspicious site</td>
                            <td>review activity</td>
                          </tr>
                          </tbody>
                        </Table>
                      </div>
                  </div>
            </div>
        )
    }
}
