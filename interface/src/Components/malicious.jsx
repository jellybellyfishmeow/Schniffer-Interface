import React from "react";
import { Table} from 'react-bootstrap';


export default class Malicious extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            d: new Date().toString(), // The 0 there is the key, which sets the date to the epoch
        }
    }


    
    render() {
        return(
            <div>
                <p>As of {this.state.d}, here are the malicious activity and alerts caught by Schniffer, 
                sorted by date of detection</p>
                <p>To stay up-to-date on realtime alerts, set up email alerts in your account settings!</p>
                
                <Table  bordered condensed hover className="table">
                          <thead>
                          <tr>
                            <th>Timestamp</th>
                            <th>IP Targeted</th>
                            <th>Activity</th>
                            <th>Recommended Action</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td>{new Date(1526671153000).toString()}</td>
                            <td>192.168.245.103</td>
                            <td>SSL::Certificate_Expires_Soon</td>
                            <td>check files downloaded</td>
                          </tr>
                          <tr>
                            <td>{new Date(1526269583000).toString()}</td>
                            <td>192.168.245.1</td>
                            <td>SMTP::Blocklist_Blocked_Host</td>
                            <td>check network connection</td>
                          </tr>
                          <tr>
                            <td>{new Date(1526111122000).toString()}</td>
                            <td>192.168.245.128</td>
                            <td>HTTP::SQL_URI_Injection_Attack</td>
                            <td>review activity</td>
                          </tr>
                          </tbody>
                        </Table>
            </div>
        );
    }
}