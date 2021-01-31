import React from 'react';
import '../CSS/Banner.css'
import DesktopBanner from '../Components/DesktopBanner'
import MobileBanner from '../Components/MobileBanner'

const Banner = () => {
    return (
    <div>
    {window.innerWidth > 500 ? <DesktopBanner /> : <MobileBanner />}
    </div>
    )
}

export default Banner;