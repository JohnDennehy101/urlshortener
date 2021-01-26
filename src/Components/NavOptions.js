import React from 'react';
import '../CSS/App.css';
import '../CSS/NavOptions.css';
import HamburgerMenu from '../Components/HamburgerMenu'
import NavbarLinks from '../Components/NavbarLinks';

const NavOptions = () => {
return (
<ul>
<li>
    <img src="../../images/logo.svg" />
    <NavbarLinks />
    
</li>



    <HamburgerMenu />

</ul>
)
}

export default NavOptions