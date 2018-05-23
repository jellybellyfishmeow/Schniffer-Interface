import React from "react";
import {Link} from "react-router-dom";
import DChart from "./Chart";
import SpeedTest from "./SpeedTest";
import NetworkUsage from "./NetworkUsage";
import ThisModal from "./ThisModal";
import DevicesModal from "./DevicesModal";


export default class DashboardActivity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {   
        }
    }
    
    render() {
        
        return (
            <div>
                <div className="cont d-flex justify-content-center" >              
                    <div className="card align-self-center">
        <h4>You currently have <span><DevicesModal /> </span>devices on your network</h4>
                    <ThisModal />
                      <hr />                      
                      <NetworkUsage />    
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
