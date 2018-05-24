import React from "react";
import {Link} from "react-router-dom";
import { Image, Grid, Col, Row} from 'react-bootstrap';
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
                                </CardBody>
                                <Image className="icon" src="./devices.png" height="120" width="120" />
                                <CardBody>
                                    <CardText><h4>You currently have <span><DevicesModal /> </span>devices on your network</h4></CardText>
                                    <ThisModal />
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs={12} md={8}>
                            <Card className="devices">
                                <SpeedTest className="icon" />  
                            </Card>                     
                        </Col>
                        
                    </Row>
                    <hr />
                    <Row className="show-grid">
                        <Col xs={12} md={4}>
                            <Card className="devices">
                                <CardBody >
                                    <CardTitle><h3>Tip of the Day</h3></CardTitle>
                                    <CardSubtitle className="sub">What you can do to improve your security!</CardSubtitle>
                                </CardBody>
                                <Image className="icon" src="./elemental-tip.png" height="120" width="120" />
                                <CardBody>
                                    <CardText><p>Establish basic security practices and policies for employees, such as 
                                        requiring strong passwords, and establish appropriate Internet use guidelines
                                         that detail penalties for violating company cybersecurity policies. Establish 
                                         rules of behavior describing how to handle and protect customer information and
                                          other vital data.</p></CardText>
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
                    <Row className="show-grid">
                        <Col xs={12}>
                            <Card className="devices">
                                <CardBody >
                                    <NetworkUsage />    
                                </CardBody>
                            </Card>
                        </Col>
                        
                    </Row>
                </Grid>
                
            </div>
        )
    }
}
