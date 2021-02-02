import React from 'react';
import '../CSS/DisplayLinks.css'

const DisplayLinks = (props) => {
   console.log(props.originalLinks)
    return (
<div>
{props.originalLinks !== undefined ? props.originalLinks.map((link, i) => <p key={i}>{link}</p>): 'test'}
</div>
    )
}

export default DisplayLinks;