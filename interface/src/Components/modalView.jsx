import myTxt from "../myscan.xml";
import React from "react";
import { Panel} from 'react-bootstrap';

import { Link } from 'react-router-dom'
import { Chart } from 'react-google-charts';
import DevicesModal from "./DevicesModal";
import DeviceTable from "./DeviceTable"
import * as routes from '../constants/route';
import '../App.css';

export default class ModalView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: [],
			//map object for name and count
			map: new Map(),
			thing: []
		}
	}
	componentDidMount() {
		this.countModal();
    }
    
    countModal() {
        this.setState((prevState, props) => ({
            text: prevState.text + props.text
        }));
        console.log(this.state.text)
    }

	
	  render() {
			return (
				<div>
					<h3>Here's a table breakdown of devices on your network!</h3>
					<DeviceTable />
					<h3>If you are more visual, here you go!</h3>
					<DevicePie />
                    <hr />                      
					<PageText />

				</div>
			);
	  }
}
const DevicePie = () => (
    <div>
		<Chart
          chartType="PieChart"
          data={[['Vendor', 'Count'], ['Apple', 3], ['Linux', 1], ['Windows', 2], ['Unknown', 1]]}
          options={{title: 'Number of Devices by Vendor', backgroundColor: '#71C2B2'}}
          graph_id="Piechart"
          width="100%"
          height="400px"
		  legend_toggle
        />
        <hr />                      
		<Chart
          chartType="PieChart"
          data={[['Type', 'Count'], ['Phone', 2], ['Computer', 3], ['Other', 1], ['Unknown', 1]]}
          options={{title: 'Number of Devices by Type', backgroundColor: '#71C2B2'}}
          graph_id="secondPie"
          width="100%"
          height="400px"
          legend_toggle
        />
	</div>
	
  )
const PageText = () => (
    <div>
        <Panel className="faq" >
          <Panel.Heading>
            <Panel.Title toggle>
            <h4>What is NMAP?</h4>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
            <p>NMAP is a tool that scans a network and identifies 
              devices on the network.</p>
            </Panel.Body>
          </Panel.Collapse>
        </Panel>

        <Panel className="faq" >
          <Panel.Heading>
            <Panel.Title toggle>
            <h4>What are the unknowns? Scary~~</h4>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
            <p>Unknowns are common, because NMAP isn’t 
            able to recognize every single device that exists 
            on the market. No need to worry about it!</p>            
            </Panel.Body>
          </Panel.Collapse>
        </Panel>

        <Panel className="faq" >
          <Panel.Heading>
            <Panel.Title toggle>
            <h4>What do I do if there's an unfamiliar device?</h4>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
            <p>Ensure that your network is password-protected, and hidden to the outside world.
             You may think about changing your network password while you’re at it. To change 
             your password, refer to the router instructions that came with it. Looking up your 
             router on Google will also point you in the right direction. Make sure that the 
             security setting on your router is set to WPA2!</p>        
            </Panel.Body>
          </Panel.Collapse>
        </Panel>

        <Panel className="faq" >
          <Panel.Heading>
            <Panel.Title toggle>
            <h4>What can I do to prevent unauthorized devices on my network?</h4>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
            <p>In addition to what we've discussed above, check out our <Link to={routes.ABOUT}>best 
        practice</Link> page for more information!</p>           
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
    </div>
  )
