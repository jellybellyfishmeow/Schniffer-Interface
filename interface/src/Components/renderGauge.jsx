import React from "react";
import { Chart } from 'react-google-charts';
import myTxt from "../speedtest.log";
import SpeedTest from "./SpeedTest";

export default class RenderGauge extends React.Component {
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
           data: [],
           message: ""
        };
        console.log(props.text)
    }
    componentDidMount() {
        this.determine();
    }

    determine() {
		var n1 = parseFloat(this.props.text[1]);
        var n2 = parseFloat(this.props.text[2]);
        console.log( + " " + n2)
        if (n1 > 10 && n2 > 10) {
			this.setState({
				message: "It is very fast! Congrats, you have a healthy network" 
			});
		} else {
			this.setState({
				message: "Uh oh, you might want to take a look at the devices on and usage of your network"
			});		  
		}
		this.setState ({
			data: [["label", "value"],["upload", 54],["download", 13]]
		})
		
    }
    
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
					Your current upload speed is {(this.props.text[1])}, and your download speed is {(this.props.text[2])}. {this.state.message}
         		</p>	
            </div>
        )
    }
       
}