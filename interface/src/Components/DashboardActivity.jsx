import React from "react";
import {Link} from "react-router-dom";
import { Grid, Col, Row} from 'react-bootstrap';
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
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
            <div className>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={4}>
                            <Card className="devices">
                                <CardBody >
                                    <CardTitle><h3>Network Devices</h3></CardTitle>
                                    <CardSubtitle className="sub">Overview of Devices on your network</CardSubtitle>
                                    <CardText><h4>You currently have <span><DevicesModal /> </span>devices on your network</h4></CardText>
                                    <ThisModal />
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs={12} md={7}>
                            <Card className="devices">
                                <SpeedTest className="sTest" />  
                            </Card>                     
                        </Col>
                        <Col xs={12} md={1}>
                        </Col>
                    </Row>
                </Grid>
                <div className="cont d-flex justify-content-center" >              
                    <div className="card align-self-center">
       
                      <hr />                      
                      <NetworkUsage />    
                        <hr />
                        
                      </div>
                  </div>
            </div>
        )
    }
}
