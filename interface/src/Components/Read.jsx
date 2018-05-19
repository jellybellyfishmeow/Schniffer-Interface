import React from "react";
import { Chart } from 'react-google-charts';
import myTxt from "../speedtest.log";

export default class Read extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			text: [],
			options: {
				width: 500, height: 500,
				redFrom: 0, redTo: 10,
				yellowFrom:10, yellowTo: 20,
				minorTicks: 5
			},
		   data: []
		};
	}

	componentDidMount() {
		this.readTextFile(myTxt);
	}

	determine() {
		var n1 = parseFloat(this.state.text[1]);
		var n2 = Math.round(parseFloat(this.state.text[2]))
		console.log(this.state.text[1])
		this.setState ({
			data: [["label", "value"],["upload", 54],["download", 13]]
		})
		if (n1 > 10 && n2 > 10) {
			this.setState({
				message: "It is very fast! Congrats, you have a healthy network" 
			});
		} else {
			this.setState({
				message: "Uh oh, you might want to take a look at the devices on and usage of your network"
			});		  
		}
	}

	readTextFile = file => {
		var rawFile = new XMLHttpRequest(); <datagrid></datagrid>
		rawFile.open("GET", file, false);
		rawFile.onreadystatechange = () => {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status === 0) {
					var allText = rawFile.responseText;
					this.setState({
						text: allText.split("\n").map((item) => {
							return item.split(" ")[1];
						})
					});
				}
			}
		};
		rawFile.send(null);
	};

	render() {
		return (
			<div>
				<Chart
						chartType="Gauge"
						data={this.state.data}
						options={this.state.options}
						graph_id="gauge"
						legend_toggle
				/>
				<p>
					Your current upload speed is {(this.state.text[1])}, and your download speed is {(this.state.text[2])}. {this.state.message}
         		</p>
			</div>
		);
	}
}

