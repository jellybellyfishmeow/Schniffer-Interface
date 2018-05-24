import React from "react";
import {Button, Panel} from 'react-bootstrap';
import SpeedTest from './SpeedTest';

export default class SpeedTestPage extends React.Component {


    handleOnClick() {
        // re run speed test, update local file, re-render element
    }
    render() {
        return(
            <div>
                <h3>Here's the result of your most recent speed test!</h3>
                <SpeedTest />
                <Button onClick={this.handleOnClick}> Re-run a speed test! </Button>	
                <hr />
                <PageText />
            </div>
        );
    }
}

const PageText = () => (
    <div>
        <Panel className="faq" defaultExpanded>
          <Panel.Heading>
            <Panel.Title toggle>
            <h4>What does your network speed mean?</h4>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body><p>
            Your network speed means how fast you are able to browse web pages 
            or download files. When you notice that it takes more than a few seconds to 
            go to a website like Facebook.com, that is seen as a slow internet connection.         
            </p></Panel.Body>
          </Panel.Collapse>
        </Panel>

        <Panel className="faq" defaultExpanded>
          <Panel.Heading>
            <Panel.Title toggle>
            <h4>What's a good speed to have?</h4>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
            <p>It very much depends on your needs. Generally one should be seeking at least 
            25Mbps down and 2Mbps up from their provider. For multiple users such as in a small business
            , we would recommend 15 Mbps or more per user unless your usage is light or broadband 
            costs are prohibitive in your area.  </p>         
            </Panel.Body>
          </Panel.Collapse>
        </Panel>

        <Panel className="faq" defaultExpanded>
          <Panel.Heading>
            <Panel.Title toggle>
            <h4>Oh no! What if my network is slow?</h4>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body><p>Contacting your Internet Service Provider (Comcast, Century Link, etc.) may help. However, 
            you may need to pay more for faster speeds.</p>      
            </Panel.Body>
          </Panel.Collapse>
        </Panel>

        <Panel className="faq" defaultExpanded>
          <Panel.Heading>
            <Panel.Title toggle>
            <h4>Where can I find out more information on this?</h4>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body><p><a href="https://www.lifewire.com/how-to-encrypt-your-wireless-network-2487653">This 
        article </a>is a good resource on securing your router</p>          
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
    </div>
  )