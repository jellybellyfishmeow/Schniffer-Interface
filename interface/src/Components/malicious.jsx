import React from "react";
import { Table} from 'react-bootstrap';
import FilterableTable from "react-filterable-table";


export default class Malicious extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            d: new Date().toString(), // The 0 there is the key, which sets the date to the epoch
        }
    }


    
    render() {
 
        // Data for the table to display; can be anything
        let data = [
            { alert: "CaptureLoss::Too_Much_Loss", meaning: 27, urgent: "Yes" },
            { alert: "Conn::Ack_Above_Hole", meaning: 27, urgent: "Yes" },
            { alert: "Conn::Content_Gap", meaning: 27, urgent: "Yes" },
            { alert: "Conn::Retransmission_Inconsistency", meaning: 27, urgent: "No" },
            { alert: "FTP::Bruteforcing", meaning: 27, urgent: "Yes" },
            { alert: "DNS::External_Name", meaning: 27, urgent: "Yes" },
            { alert: "FTP::Site_Exec_Success", meaning: 27, urgent: "Yes" },
            { alert: "HTTP::SQL_Injection_Attacker", meaning: 27, urgent: "Yes" },
            { alert: "HTTP::SQL_Injection_Victim", meaning: 27, urgent: "Yes" },
            { alert: "Intel::Notice", meaning: 27, urgent: "No" },
            { alert: "PacketFilter::Dropped_Packets", meaning: 27, urgent: "Yes" },
            { alert: "ProtocolDetector::Protocol_Found", meaning: 27, urgent: "Yes" },
            { alert: "ProtocolDetector::Server_Found", meaning: 27, urgent: "Yes" },
            { alert: "SMTP::Blocklist_Blocked_Host", meaning: 27, urgent: "Yes" },
            { alert: "SMTP::Blocklist_Error_Message", meaning: 27, urgent: "Yes" },
            { alert: "SMTP::Suspicious_Origination", meaning: 27, urgent: "Yes" },
            { alert: "SSH::Interesting_Hostname_Login", meaning: 27, urgent: "No" },
            { alert: "SSH::Login_By_Password_Guesser", meaning: 27, urgent: "Yes" },
            { alert: "SSH::Password_Guessing", meaning: 27, urgent: "Yes" },
            { alert: "SSH::Watched_Country_Login", meaning: 27, urgent: "Yes" },
            { alert: "SSL::Certificate_Expired", meaning: 27, urgent: "Yes" },
            { alert: "SSL::Certificate_Expires_Soon", meaning: 27, urgent: "No" },
            { alert: "SSL::Certificate_Not_Valid_Yet", meaning: 27, urgent: "Yes" },
            { alert: "SSL::Invalid_Server_Cert", meaning: 27, urgent: "Yes" },
            { alert: "Scan::Address_Scan", meaning: 27, urgent: "No" },
            { alert: "Scan::Port_Scan", meaning: 27, urgent: "No" },
            { alert: "Signatures::Count_Signature", meaning: 27, urgent: "Yes" },
            { alert: "Signatures::Multiple_Sig_Responders", meaning: 27, urgent: "Yes" },
            { alert: "Signatures::Multiple_Signatures", meaning: 27, urgent: "Yes" },
            { alert: "Signatures::Sensitive_Signature", meaning: 27, urgent: "Yes" },
            { alert: "Software::Software_Version_Change", meaning: 27, urgent: "No" },
            { alert: "Software::Vulnerable_Version", meaning: 27, urgent: "Yes" },
            { alert: "TeamCymruMalwareHashRegistry::Match", meaning: 27, urgent: "Yes" },
            { alert: "Traceroute::Detected", meaning: 27, urgent: "No" },
        ];
        
        // Fields to show in the table, and what object properties in the data they bind to
        let fields = [
            { name: 'alert', displayName: "Alert message", inputFilterable: true, sortable: true },
            { name: 'meaning', displayName: "Meaning", inputFilterable: true, exactFilterable: true, sortable: true },
            { name: 'urgent', displayName: "Urgent?", inputFilterable: true, exactFilterable: true, sortable: true },

        ];
        return(
            <div>
                <p>As of {this.state.d}, here are the suspicious activity and alerts caught by Schniffer, 
                sorted by date of detection</p>
                <p>To stay up-to-date on realtime alerts, set up email alerts in your account settings!</p>
                <MaliciousTable />
                <h3>Confused? Don't worry!</h3>
                <p>Schniffer scans your network in realtime for anything suspicious or just, plain old weird, 
                    and we save the scanner alerts into a log, which is what you are seeing here! We use a network
                    scanner tool called Bro Scan, and as you can see in the activities column, Bro Scan has its own
                    names for different activities. We will explain more in detail what each of them means for you!
                </p>
                <PageText />
                <FilterableTable
                    namespace="People"
                    initialSort="name"
                    data={data}
                    fields={fields}
                    noRecordsMessage="There are no records to display"
                    noFilteredRecordsMessage="No people match your filters!"
                />
                </div>
        );
    }
}

const MaliciousTable = () => (
    <Table  bordered condensed hover className="table">
        <thead>
        <tr>
        <th>Timestamp</th>
        <th>IP Targeted</th>
        <th>Activity</th>
        <th>Recommended Action</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>{new Date(1526671153000).toString()}</td>
        <td>192.168.245.103</td>
        <td>SSL::Certificate_Expires_Soon</td>
        <td>check files downloaded</td>
        </tr>
        <tr>
        <td>{new Date(1526269583000).toString()}</td>
        <td>192.168.245.1</td>
        <td>SMTP::Blocklist_Blocked_Host</td>
        <td>check network connection</td>
        </tr>
        <tr>
        <td>{new Date(1526111122000).toString()}</td>
        <td>192.168.245.128</td>
        <td>HTTP::SQL_URI_Injection_Attack</td>
        <td>review activity</td>
        </tr>
        </tbody>
    </Table>
)

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