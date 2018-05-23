import React from "react";
import {Button} from 'react-bootstrap';
import SpeedTest from './SpeedTest';

export default class SpeedTestPage extends React.Component {
    constructor(props) {
        super(props);
    }

    handleOnClick() {
        // re run speed test, update local file, re-render element
    }
    render() {
        return(
            <div>
                <h3>Here's the result of your most recent speed test!</h3>
                <SpeedTest />
                <Button onClick={this.handleOnClick}> Re-run a speed test! </Button>	
                <PageText />
            </div>
        );
    }
}

const PageText = () => (
    <div>
        <h3>What does your network speed mean?</h3>
        <p>fast is gud, slow is bad</p>
        <h3>What's a good speed to have?</h3>
        <p>It very much depends on your needs. Generally one should be seeking at least 
            25Mbps down and 2Mbps up from their provider. For multiple users such as in a small business
            , we would recommend 15 Mbps or more per user unless your usage is light or broadband 
            costs are prohibitive in your area.</p>
        <h3>Oh no! What if my network is slow?</h3>
        <p>u fuked</p>
        <h3>Where can I find out more information on this?</h3>
        <p>google it</p>
    </div>
  )