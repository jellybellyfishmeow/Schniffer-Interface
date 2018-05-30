import React from 'react'

const tips = ["Don't leave your devices unattended!", 
"Establish basic security practices and policies for employees, such as requiring strong passwords, and establish appropriate Internet use guidelines that detail penalties for violating company cybersecurity policies. Establish rules of behavior describing how to handle and protect customer information and other vital data.",
 "Don't click on links or attachments from unsolicited emails or texts.",
  "Only install an anti-virus program from a known and trusted source.  Keep virus definitions, engines and software up to date to ensure your anti-virus program remains effective. ", 
  "Back up on a regular basis - if you are a victim of a security incident, the only guaranteed way to repair your computer is to erase and re-install the system.  ", 
  "Keep sensitive data (e.g., SSN's, credit card information, student records, health information, etc.) off of your workstation, laptop, or mobile devices.", 
  "Be suspicious of any official-looking email message or phone call that asks for personal or financial information.", 
  "Use web browsers such as Chrome or Firefox that receive frequent, automatic security updates.", 
  "Disable all unnecessary services to reduce the attack surface of your network and devices, including your router. Unused or unwanted services and software can create security holes on a device’s system, which could lead to an increased attack surface of your network environment.", 
  "Consider using a password manager. A password manager is a software that can help you generate, store, encrypt, and retrieve unique and complex login credentials for all your accounts, effectively eliminating the need to remember or write down passwords."]
const t = tips[Math.floor((Math.random() * 10) + 1)];

const Tip = () => (
    <p>{t}</p>

)

export default Tip;