import myTxt from "../myscan.xml";
import React from "react";
import { Chart } from 'react-google-charts';



export default class ModalView extends React.Component {
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
		this.countModal();
    }
    
    countModal() {
        this.setState((prevState, props) => ({
            text: prevState.text + props.text
        }));
        console.log(this.state.text)
    }

	
	  render() {
			return (
				<div>
					{this.props.text.length - 1}
					{this.state.text[1]}
					<br />
					{this.state.text[2]}
					{this.state.text}

				</div>
			);
	  }
}

