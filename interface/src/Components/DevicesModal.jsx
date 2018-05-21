import myTxt from "../myscan.xml";
import React from "react";
import { Chart } from 'react-google-charts';



export default class DevicesModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: []
		}
	}
	componentDidMount() {
		this.readTextFile(myTxt);
	}
	readTextFile = file => {
		var rawFile = new XMLHttpRequest(); <datagrid></datagrid>
		rawFile.open("GET", file, false);
		rawFile.onreadystatechange = () => {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status === 0) {
					var allText = rawFile.responseText;
					console.log(allText)
					this.setState({
						text: allText.split("vendor=\"").map((item) => {
							return item.split(" ");
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
					{this.state.text.length - 1}
					{this.state.text[1]}
					<br />
					{this.state.text[2]}

				</div>
			);
	  }
}

