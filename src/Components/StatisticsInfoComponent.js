import React from 'react';
import '../CSS/StatisticsInfoComponent.css';

const StatisticsInfoComponent = (props) => {
    return (
        <div>
        <div className="statisticsComponentParentContainer">
            <img src={props.iconPath} alt={props.altText} className="iconImage"/>
            <h2 className="statisticsComponentDetailTitle">{props.title}</h2>
            <p className="statisticsComponentDetailText">{props.detail}</p>
            
            
        </div>
        {
            props.index !== '3' ?
 <div className="divider"></div> : ''
        }
       
        </div>
    )
}

export default StatisticsInfoComponent