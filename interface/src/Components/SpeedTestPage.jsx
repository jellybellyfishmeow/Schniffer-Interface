import React from "react";
import {Button} from 'react-bootstrap';
import SpeedTest from './SpeedTest';

export default class SpeedTestPage extends React.Component {
    constructor(props) {
        super(props);
    }

    handleOnClick() {
        alert("run!!!");
        // re run speed test, update local file, re-render element
    }
    render() {
        return(
            <div>
                <SpeedTest />
                <Button bsStyle="primary" bsSize="large" block onClick={this.handleOnClick}> Re-run a speed test! </Button>	
            </div>
        );
    }
}