import React from "react";
import {Link} from "react-router-dom";
import { Image, Grid, Button, Col, Row} from 'react-bootstrap';
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
import SpeedTest from "./SpeedTest";
import ThisModal from "./ThisModal";
import DevicesModal from "./DevicesModal";
import Tip from "./TOTD";
import * as routes from '../constants/route';


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
                                    <CardTitle><h3>Tip of the Day</h3></CardTitle>
                                    <CardSubtitle className="sub">What you can do to improve your security!</CardSubtitle>
                                </CardBody>
                                <Image className="icon" src="./elemental-tip.png" height="120" width="120" />
                                <CardBody>
                                    <CardText><Tip /></CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs={12} md={4}>
                            <Card className="devices">
                                <CardBody >
                                    <CardTitle><h3>Your Network Grade</h3></CardTitle>
                                    <CardSubtitle className="sub">How is your current network security?</CardSubtitle>
                                </CardBody>
                                <Image className="icon" src="./grade.png" height="120" width="120" />
                                <CardBody>
                                    <CardText><p>Based on the number of alerts you have, and your network speed, your 
                                        current network grade is <span>A-</span>. Keep up the good work!</p></CardText>
                                    <style type="text/css">{`
                                    .btn-custom {
                                        background-color: #B3E2CC;
                                        color: #0B5557;
                                        font-weight: bold;
                                    }
                                    `}</style>
                                    <Button bsStyle="custom"><Link to={routes.MALICIOUS}>View Alerts</Link></Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs={12} md={4}>
                            <Card className="devices">
                                <CardBody >
                                    <CardTitle><h3>Your profile</h3></CardTitle>
                                    <CardSubtitle className="sub">Who you are!</CardSubtitle>
                                </CardBody>
                                <Image className="icon" src="./jason.jpg" height="150" width="150" />
                                <CardBody>
                                    <CardText>
                                        <p><span className="currDate">Name:</span> Joe Stanford</p>
                                        <p><span className="currDate">Role:</span> Manager, Business owner</p>
                                        <p><span className="currDate">Business:</span> Joe's Pies and Sandwiches</p>
                                        <p><span className="currDate"> Schniffer-protected since:</span> May 10, 2018</p>

                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <hr />

                    <Row className="show-grid" >
                        <Col xs={12} md={4} py={2}>
                            <Card className="devices">
                                <CardBody >
                                    <CardTitle><h3>Network Devices</h3></CardTitle>
                                    <CardSubtitle className="sub">Overview of Devices on your network</CardSubtitle>
                                </CardBody>
                                <Image className="icon" src="./devices.png" height="120" width="120" />
                                <CardBody>
                                    <CardText><h4>You currently have <span><DevicesModal /> </span>devices on your network</h4></CardText>
                                    <ThisModal />
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs={12} md={8} py={2}>
                            <Card className="devices">
                                <SpeedTest className="icon" />  
                            </Card>                     
                        </Col>
                        
                    </Row>
                    
                </Grid>
                
            </div>
        )
    }
}
