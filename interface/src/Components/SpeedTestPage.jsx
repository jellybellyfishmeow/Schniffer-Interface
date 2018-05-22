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
                <SpeedTest />
                <Button> onClick={this.handleOnClick}> Re-run a speed test! </Button>	
                <PageText />
            </div>
        );
    }
}

const PageText = () => (
    <div>
        <h2>What does your network speed mean?</h2>
        <p>fast is gud, slow is bad</p>
        <h2>Oh no! What if my network is slow?</h2>
        <p>u fuked</p>
    </div>
  )