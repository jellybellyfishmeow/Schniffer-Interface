import Read from "./Read";
import React from "react";
import { Link } from "react-router-dom";
var myTxt = require("../speedtest.log");

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
					<p>
						Your current upload speed is {this.state.upS}, and your download speed is {this.state.downS}. {this.state.message}
                    </p>
				</div>

			);
	  }
}

