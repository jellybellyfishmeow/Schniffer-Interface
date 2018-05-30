import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Nav, NavItem, Navbar, Jumbotron, Button} from 'react-bootstrap';
import '../App.css';
import * as routes from '../constants/route';

const BestPractices = () => (
    <div>
        <div className="bestP">
            <h2>Security Best Practices for your business!</h2>
            <h4>1. Ensure that your wireless network is password protected 
                and hidden</h4>
            <p>Having a network that anyone can join is akin to leaving your
                door unlocked. Anyone is able to come in, and you can’t be 
                sure what they are planning to do with their access. </p>
            <h4>2. Install a firewall on your network.</h4>
            <p>There are a lot of free firewall solutions such as ZoneAlarm and 
                Comodo and you have every reason to use one. A firewall allows
                only traffic that was specifically requested by a device on the
                network, into your network. This stops many attacks originating
                from foreign areas.</p>
            <h4>3. Decide what data your business can NOT lose, and back it up.</h4>
            <p>This includes spreadsheets, databases, financial information, tax 
                information etc. If your business is hit with a Ransomware attack, 
                where a hacker locks everything on your hard drive and demands payment
                to unlock it, you will desperately wish that you had this data in more
                than one place. Microsoft, as well as others, offers cloud-services 
                to backup your data. Or you can buy an external hard drive and backup
                that data yourself. Whatever you do, don’t allow your business to go
                    under because you didn’t save a copy of an important file. Make sure
                    to do this regularly!</p>
            <h4>4. Ensure that your devices are running on their latest version of 
                operating system. </h4>
            <p>When a tech company notifies you of an update, that update often includes
                security fixes that they have found or were disclosed to them. Updating 
                regularly ensures that your device has the latest protections.</p>
            <h4>5. Employ strong passwords</h4>
            <p>You have probably heard this a lot, but what makes a strong password? The 
                current practice is to use a phrase or a bunch of random words. This practice
                makes passwords easier to remember, harder to guess, and long passwords ensure 
                that any attempt at brute-forcing (randomly guessing until your password is found)
                will take longer than a decade to crack.</p>
            <h4>6. Learn what a Phishing email looks like</h4>
            <p>Phishing is when a scammer sends a fraudulent email posing as another person/company
                to coerce personal information from the victim. Any emails that ask for personal 
                information should be marked as suspicious until you can confirm who sent it. Remember, 
                on the internet, if it’s too good to be true, it probably is.</p>
            <h4>7. Be in contact with a professional security service</h4>
            <p>In the event of a breach or system failure, having the professional’s phone number on 
                hand will save your business from costly downtime and further protect your network.</p>
            <h4>8. Enable two-factor authentication on important phone and desktop apps.</h4>
            <p>Two-factor authentication sends a code to your phone to be inputted on the app. This adds 
                another layer of proof that you are who you say you are.</p>
            <h4>9. Don’t share sensitive information over email.</h4>
            <p>If an email account is hacked, you run the risk of the hacker gaining even more information
                about your business.</p>
            <h4>10. Don’t forget to physically secure your devices.</h4>
            <p>Laptops are prime targets for theft. A laptop with important information on it is an even
                bigger target. Never leave your device unattended.</p>
        </div>
        <br />
        <Professionals />
    </div>
)

const Professionals = () => (
    <div className="bestP">
      <h2>Need professional help? </h2>
      <h4>When looking for professional assistance, make sure the person is qualified. Below are the top
          certifications for information security professionals!
      </h4>
      <p>1. CISSP: Certified Information Systems Security Professional<br />
          2. CISM: Certified Information Security Manager<br />
            3. CompTIA Security+<br />
            4. CEH: Certified Ethical Hacker<br />
            5. GSEC: SANS GIAC Security Essentials</p>
    </div> 
  )

  export default BestPractices;
