import React from "react";


export default class Malicious extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            d: new Date(1234567890).toString(), // The 0 there is the key, which sets the date to the epoch
        }
    }


    
    render() {
        return(
            <div>
                <p>{this.state.d}</p>
            </div>
        );
    }
}