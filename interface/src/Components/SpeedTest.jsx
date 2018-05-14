import React from "react";
import { Chart } from 'react-google-charts';
import { Link } from "react-router-dom";


export default class SpeedTest extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		   options: {
				width: 500, height: 500,
				redFrom: 90, redTo: 100,
				yellowFrom:75, yellowTo: 90,
				minorTicks: 5
			},
		  data: [['Label', 'Value'],
			['Upload', 80],
			['Download', 55]]
		}
	}
	  render() {
			return (
				<Chart
					chartType="Gauge"
					data={this.state.data}
					options={this.state.options}
					graph_id="gauge"
					legend_toggle
				/>
			);
	  }
}

