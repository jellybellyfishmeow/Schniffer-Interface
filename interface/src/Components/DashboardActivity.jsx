import React from "react";
import { Table, Image} from 'react-bootstrap';
import {Link, Redirect} from "react-router-dom";
import firebase from "firebase/app";
import DChart from "./Chart";
import SpeedTest from "./SpeedTest";
import Nav from "./nav"
import NetworkUsage from "./NetworkUsage";
import JsonTable from "ts-react-json-table";

export default class DashboardActivity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {   
        }
    }
    
    render() {
        
        return (
            <div>
              <Nav />
                <div className="cont d-flex justify-content-center" >              
                    <div className="card align-self-center">
                      <hr />
                      <NetworkUsage />
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
                        <hr />
                          <DChart />
                        <hr />
                        <SpeedTest />
                        
                      </div>
                  </div>
            </div>
        )
    }
}
