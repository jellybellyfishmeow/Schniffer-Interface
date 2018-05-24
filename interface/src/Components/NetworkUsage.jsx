import React from "react";
import { Chart } from 'react-google-charts';
import '../App.css';
import {Link} from "react-router-dom";
import * as routes from '../constants/route';



export default class NetworkUsage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  options: {
			title: 'Network Usage',
			hAxis: { title: 'time', minValue: 0, maxValue: 15 },
			vAxis: { title: 'amount', minValue: 0, maxValue: 15 },
			legend: 'none',
			backgroundColor: '#71C2B2',
		  },
		  data: [
			['time', 'amount'],
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
				<div>
				<Chart
					chartType="LineChart"
					data={this.state.data}
					options={this.state.options}
					graph_id="usage"
					width="100%"
					height="450px"
					legend_toggle
				/>
				<p>Looks like you have an average amount of network usage. 
					Try running a <Link to={routes.SPEED}>speed test</Link> if you have any issues </p>
				</div>
			);
	  }
}

