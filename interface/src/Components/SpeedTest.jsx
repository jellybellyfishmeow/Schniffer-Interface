import Read from "./Read";
import React from "react";
import { Link } from "react-router-dom";
import myTxt from "../speedtest.log";

export default class SpeedTest extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: "",
			upS: 30,
			downS: 30,
		    
		}
	}


	  render() {
		  if (this.state.upS > 10 && this.state.downS > 20) {
			this.state.message = 'It is very fast'
		  } else {
			this.state.message = "slow"
		  }
			return (
				<div>
					<Read
					txt={myTxt}
					/>
				</div>

			);
	  }
}

