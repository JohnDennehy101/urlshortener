import React from 'react';
import '../CSS/DisplayLinks.css'

const DisplayLinks = (props) => {
    console.log(props.links)
    return (
<div>
{props.links !== undefined ? props.links.map((link, i) => <p key={i}>{link}</p>): 'test'}
</div>
    )
}

export default DisplayLinks;