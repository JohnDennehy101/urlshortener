import React from 'react';
import '../CSS/App.css';
import '../CSS/MobileMenu.css'

const MobileMenu = () => {
return (
    <div id="mobileMenuContainer">
        <ul className="mobileMenuLinksContainer">
            <li className="mobileMenuLink">Features</li>
             <li className="mobileMenuLink">Pricing</li>
              <li className="mobileMenuLink">Resources</li>
               <li className="mobileMenuLink">Login</li>
                <li className="mobileMenuLink">Sign Up</li>
        </ul>
    </div>
)
}

export default MobileMenu;