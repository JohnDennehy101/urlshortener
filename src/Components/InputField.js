import React from 'react';
import '../CSS/InputField.css'

const InputField = () => {
let styleSettings = window.innerWidth > 500 ? {
    backgroundImage: "url(/images/bg-shorten-desktop.svg",
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'hsl(257, 27%, 26%)',
        backgroundPosition: 'top right',
        backgroundSize: 'cover'
    } : 
    {
        backgroundImage: "url(/images/bg-shorten-mobile.svg",
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'hsl(257, 27%, 26%)',
        backgroundPosition: 'top right'
    }
return (

    
    <div id="inputFieldParentContainer" style={styleSettings}>
        <input placeholder='Shorten a link here...' />
        <button id="shortenUrlButton">Shorten it!</button>
    </div>
 
    
)
}

export default InputField;
