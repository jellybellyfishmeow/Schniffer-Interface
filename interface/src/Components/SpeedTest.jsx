import React from "react";
import constants from "./constants";
import { Chart } from 'react-google-charts';


export default class SpeedTest extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  options: {
			title: 'Network Speed',
			hAxis: { title: 'time', minValue: 0, maxValue: 15 },
			vAxis: { title: 'speed', minValue: 0, maxValue: 15 },
			legend: 'none',
		  },
		  data: [
			['time', 'speed'],
			[2, 3.5],
			[3, 12],
			[4, 5.5],
			[5, 5],
			[6.5, 7],
			[11, 14],
		  ],
		};
	  }
	  render() {
			return (
				<Chart
					chartType="LineChart"
					data={this.state.data}
					options={this.state.options}
					graph_id="line"
					width="100%"
					height="400px"
					legend_toggle
				/>
			);
	  }
}

