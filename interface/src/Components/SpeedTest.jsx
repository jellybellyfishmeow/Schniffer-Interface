import Read from "./Read";
import React from "react";
import { Chart } from 'react-google-charts';
import { Link } from "react-router-dom";
var myTxt = require("../speedtest.log");

export default class SpeedTest extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: "",
			upS: 30,
			downS: 30,
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
		  if (this.state.upS > 10 && this.state.downS > 20) {
			this.state.message = 'It is very fast'
		  } else {
			this.state.message = "slow"
		  }
			return (
				<div>
					<Read
					txt={myTxt}
					/>
					<Chart
					chartType="Gauge"
					data={this.state.data}
					options={this.state.options}
					graph_id="gauge"
					legend_toggle
					/>
					<p>
						Your current upload speed is {this.state.upS}, and your download speed is {this.state.downS}. {this.state.message}
                    </p>
				</div>

			);
	  }
}

