import {React, useState} from 'react';
import '../CSS/App.css';
import '../CSS/Navbar.css'
import '../CSS/NavOptions.css';
// import NavOptions from '../Components/NavOptions'
import MobileMenu from '../Components/MobileMenu'
import NavbarLinks from '../Components/NavbarLinks'
import NavbarRightLinkAndButton from '../Components/NavbarRightLinkAndButton';
import '../CSS/HamburgerMenu.css';


const Navbar = () => {
const [mobileMenuState, setMobileMenuState] = useState(false);

const toggleMenu = () => {
    setMobileMenuState(!mobileMenuState)
}




return (
    <div>
    <nav className='nav'>
{/* <NavOptions mobileMenu={false}/> */}

<ul>
<li>
    <img src="../../images/logo.svg" alt="logo" />
    <NavbarLinks />
    
</li>

<li>

   
    <NavbarRightLinkAndButton />

</li>



    {/* <HamburgerMenu mobile={props.mobileMenu}/> */}
     <li className='hamburgerParentElem' onClick={toggleMenu}>
   <div className='hamburger'></div>
   <div className='hamburger'></div>
   <div className='hamburger'></div>
  
   </li>

</ul>

    </nav>
{mobileMenuState ? <MobileMenu /> : ''
}
    

    </div>
)
}

export default Navbar;