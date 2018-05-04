import React from "react";
import { Chart } from 'react-google-charts';
import { Link } from "react-router-dom";


export default class NetworkMap extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  options: {
			title: 'Network Map,
			hAxis: { title: 'Age', minValue: 0, maxValue: 15 },
			vAxis: { title: 'Weight', minValue: 0, maxValue: 15 },
			legend: 'none',
		  },
		  data: [
			['sample', 'sample'],
			[8, 12],
			[4, 5.5],
			[11, 14],
			[4, 5],
			[3, 3.5],
			[6.5, 7],
		  ],
		};
	  }
	  render() {
		return (
		  <Chart
			chartType="ScatterChart"
			data={this.state.data}
			options={this.state.options}
			graph_id="ScatterChart"
			width="100%"
			height="400px"
			legend_toggle
		  />
		);
	  }
}

