import React from "react";
import { Modal, Popover, Tooltip, Button, OverlayTrigger} from 'react-bootstrap';
import DevicesModal from "./DevicesModal";
import DeviceTable from "./DeviceTable"
import * as routes from '../constants/route';
import { Link } from 'react-router-dom'

export default class ThisModal extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      const popover = (
        <Popover id="modal-popover" title="popover">
          wow! how do we know? We used a tool called ?
        </Popover>
      );
      const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
  
      return (
        <div>
          <p>View the list of devices</p>
  
          <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
            View Devices
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>List of Devices*</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>*Take it with a grain of salt!</h4>
              <p>
                While a scan of your network can get the manufacturer information (vendor) for every 
                device on the network, our scans can only make educated guesses about the device type 
                and operating system (OS) used by the device. This information is helpful in determining 
                if you have any extra and unfamiliar devices on your network.
              </p>
  
              <h4>How many devices do you currently have? </h4>
              
              <p>
                <OverlayTrigger overlay={popover}>
                  <a href="#popover"><DevicesModal /></a>
                </OverlayTrigger>{' '}
              </p>
  
              <h4>List of devices by vendor</h4>
              <p>
                {<DeviceTable />}
              </p>

              <h4>For more details, visit the <Link to={routes.DEVICES}>Network Devices</Link> page!</h4>
    
              
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
  