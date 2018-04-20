import React from "react";
import constants from "./constants";
import DoughnutChart from "react-chartjs-2";


export default class DChart extends React.Component {
	
	render(){
		let data = {
			labels: [
				'iPhone 1',
				'POS computer',
				'Jenny\'s macbook'
			],
			datasets: [{
				data: [300, 50, 100],
				backgroundColor: [
				'#FF6384',
				'#36A2EB',
				'#FFCE56'
				],
				hoverBackgroundColor: [
				'#FF6384',
				'#36A2EB',
				'#FFCE56'
				]
			}]
		};
		 return(
			<div>
				<h2>Network Usage</h2>
				<DoughnutChart data={data} />
			</div>
			)
	 }
}
