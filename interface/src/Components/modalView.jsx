import myTxt from "../myscan.xml";
import React from "react";
import { Chart } from 'react-google-charts';
import DevicesModal from "./DevicesModal";
import DeviceTable from "./DeviceTable"
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
          options={{title: 'Number of Devices by Vendor', backgroundColor: '#E4E4E4'}}
          graph_id="Piechart"
          width="100%"
          height="400px"
		  legend_toggle
		  
        />
		<Chart
          chartType="PieChart"
          data={[['Type', 'Count'], ['Phone', 2], ['Computer', 3], ['Other', 1], ['Unknown', 1]]}
          options={{title: 'Number of Devices by Type', backgroundColor: '#E3E3E3'}}
          graph_id="secondPie"
          width="100%"
          height="400px"
          legend_toggle
        />
	</div>
	
  )
const PageText = () => (
    <div>
        <h3>What are the unknowns? Scary~~</h3>
        <p>don't worry</p>
        <h3>What do I do if there's an unfamiliar device?</h3>
        <p>u fuked</p>
        <h3>What can I do to prevent unauthorized devices on my network?</h3>
        <p>password u fool</p>
        <h3>Where can I find out more information on this?</h3>
        <p>google it</p>
    </div>
  )
