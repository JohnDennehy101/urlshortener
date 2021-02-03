import React from 'react';
import '../CSS/DisplayLinks.css'

const DisplayLinks = (props) => {

   const copyText = (e) => {
navigator.clipboard.writeText(e.target.parentElement.childNodes[0].textContent)
   }
   //console.log(props.originalLinks)
   let testArr = ['google.ie', 'google.com', 'google.de']
    return (
<div className="linksParentContainer">
    {/* Should be props.originalLinks for both when api in play */}
{testArr !== undefined ? testArr.map((link, i) => <div className="linksContainer"><p className="originalUrl" key={i}>{link}</p><div className="shortenedContainer"><p className="shortenedUrl" key={i}>{link}</p><button className="copyButton" onClick={copyText}>Copy</button></div></div>): 'test'}
</div>
    )
}

export default DisplayLinks;