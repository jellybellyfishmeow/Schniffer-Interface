import React from "react";
import { Modal, Popover, Tooltip, Button, OverlayTrigger} from 'react-bootstrap';
import DevicesModal from "./DevicesModal";

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
              <h4>* Actually, a list of vendors</h4>
              <p>
                While a scan of your network cannot show the actual devices on the network, we can 
                get the manufacturer information for every device on the network. This information 
                is helpful in determining if you have any extra and unfamiliar devices on your network.
              </p>
  
              <h4>How many devices do you currently have? </h4>
              
              <p>
                <OverlayTrigger overlay={popover}>
                  <a href="#popover"><DevicesModal /></a>
                </OverlayTrigger>{' '}
              </p>
  
              <h4>List of devices by vendor</h4>
              <p>
                {/* <OverlayTrigger overlay={tooltip}>
                  <a href="#tooltip">tooltip</a>
                </OverlayTrigger>{' '} */}
                table HERE
              </p>
    
              
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
  