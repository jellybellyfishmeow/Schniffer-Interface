import myTxt from "../myscan.xml";
import React from "react";
import { Chart } from 'react-google-charts';
import ModalView from './modalView';


export default class DevicesModal extends React.Component {
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
		this.readTextFile(myTxt);
		
	}

	readTextFile(file) {
		var rawFile = new XMLHttpRequest(); <datagrid></datagrid>
		rawFile.open("GET", file, false);
		rawFile.onreadystatechange = () => {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status === 0) {
					const allText = rawFile.responseText;
					this.setState({
						text: allText.split("vendor=\"").map((item) => {
							return item.split("/>");
						})
					});
					let all = [];
					all = allText.split("vendor=\"").map((item) => {
						return item.split("/>");
					})

					for (var item in all) {
						this.setState({
							thing: this.state.thing.push(0)
						})
					}
					// for each item, split at ", take the first element and map
				}
			}
		};
		rawFile.send(null);
	};

	  render() {
			return (
				<div>
					{this.state.text.length - 1}
					{/* {this.state.text[1]}
					<br />
					{this.state.text[2]} */}
					<ModalView text={this.state.text} />
				</div>
			);
	  }
}

