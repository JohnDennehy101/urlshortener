import React from 'react';
import '../CSS/StatisticsInfoComponent.css';

const StatisticsInfoComponent = (props) => {
    return (
        <div className="statisticsComponentParentContainer">
            <img src={props.iconPath} alt={props.altText} className="iconImage"/>
            <h2 className="statisticsComponentDetailTitle">{props.title}</h2>
            <p className="statisticsComponentDetailText">{props.detail}</p>
            
        </div>
    )
}

export default StatisticsInfoComponent