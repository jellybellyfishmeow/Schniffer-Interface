# Schniffer
This is Schniffer, the all-in-one security monitoring tool tailored to small and family-run businesses.

With just two simple steps, your small or family-run business can begin protecting itself from malicious cyber attacks. As of 2015, 61% of small businesses have undergone a cyber attack from a malicious source, with over 60% of them folding within a year of the attack occurring. Also, Small business owners already have a stressful environment just running their day-to-day operations. Adding on technical and cyber-security expertise is a tall order, considering the breadth of information needed in order to properly secure your business. Many new businesses may not even have the funding to pay professional IT services to conduct security audits and secure their business.

With this in mind, we present Schniffer: an all-in-one network monitoring, vulnerability scanning, and cyber threat detection system. This technology leverages the popular Raspberry Pi mini-computer to give an inexpensive first line of defense to a major problem threatening small businesses. We use open source tools such as OpenVAS, Bro IDS, and linux command line tools to provide these features. Along with these tools to help safeguard your business, Schniffer offers clear and concise explanations for cybersecurity concepts through our web interface and dashboard. This is to further teach users how to secure their small or family-run business on their own. It should be noted that Schniffer is a tool for detection and prevention ONLY. It is not powerful enough to thwart attackers if they find a way into your network. For this reason, you can pair Schniffer with professional IT services to guide their work and save your business money.

To access this dashboard, simply type schniffer.local into any web browser that is connected to your network. Using a passcode given on the Schniffer device itself, you may set your log-in credentials to access the dashboard.

Schniffer runs on the Kali Linux operating system. This choice was made due to the pre-configured network tools that are essential in cybersecurity. We leverage OpenVAS and Bro IDS because they are the leaders in open source vulnerability scanning and intrusion detection. 

We used React.js for the front-end because we needed an interface that can handle the dynamic information that Bro IDS and Raspberry Pi will provide. The web interface needs to be able to display new information such as alerts as soon as they are received, which React handles perfectly.

See the Schniffer in action:
https://youtu.be/ZLT8tDjJTRg
