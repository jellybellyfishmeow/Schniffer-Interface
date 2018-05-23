import myTxt from "../myscan.xml";
import React from "react";
import { Chart } from 'react-google-charts';
import { Table} from 'react-bootstrap';
import DevicesModal from "./DevicesModal";


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
					<h3></h3>

				</div>
			);
	  }
}

