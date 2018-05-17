import React from "react";
import { Chart } from 'react-google-charts';

export default class Read extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			text: [],
			options: {
				width: 500, height: 500,
				redFrom: 90, redTo: 100,
				yellowFrom:75, yellowTo: 90,
				minorTicks: 5
			},
		   data: []
		};
	}

	componentDidMount() {
		this.readTextFile(this.props.txt);
	}

	readTextFile = file => {
		var rawFile = new XMLHttpRequest(); <datagrid></datagrid>
		rawFile.open("GET", file, false);
		rawFile.onreadystatechange = () => {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status == 0) {
					var allText = rawFile.responseText;
					this.setState({
						text: allText.split("\n").map((item) => {
							return item.split(" ")[1];
						})
					});
					var n1 = (this.state.text[1]);
					var n2 = Math.round(parseFloat(this.state.text[2]))
					console.log((this.state.text))
					this.setState ({
						data: [["label", "value"],["upload", n2],["download", parseInt(n1)]]
					})

				}
			}
			
		};
		rawFile.send(null);
	};

	render() {
		return (
			<div>
				{(this.state.text[1])}
				<Chart
						chartType="Gauge"
						data={this.state.data}
						options={this.state.options}
						graph_id="gauge"
						legend_toggle
				/>
			</div>
		);
	}
}

