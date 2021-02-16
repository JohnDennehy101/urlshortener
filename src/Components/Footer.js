import React from 'react';
import '../CSS/Footer.css'

const Footer = () => {
    return (
<div>
    <div>
        <img src="../images/logo.svg" alt="Shortly Logo" className="footerLogo" />
    </div>
    <div>
        <h3>Features</h3>
        <p>Link Shortening</p>
        <p>Branded Links</p>
        <p>Analytics</p>
    </div>
     <div>
        <h3>Resources</h3>
        <p>Blog</p>
        <p>Developers</p>
        <p>Support</p>
    </div>
    <div>
        <h3>Company</h3>
        <p>About</p>
        <p>Our Team</p>
        <p>Careers</p>
        <p>Contact</p>
    </div>
    <div>
        <img src="../images/icon-facebook.svg" alt="Facebook social media" className="footerIcon"/>
         <img src="../images/icon-twitter.svg" alt="Twitter social media" className="footerIcon"/>
          <img src="../images/icon-pinterest.svg" alt="Pinterest social media" className="footerIcon"/>
           <img src="../images/icon-instagram.svg" alt="Instagram social media" className="footerIcon"/>
    </div>

</div>
    )
}

export default Footer;