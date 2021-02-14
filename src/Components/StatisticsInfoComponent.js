import React from 'react';
import '../CSS/StatisticsInfoComponent.css';

const StatisticsInfoComponent = (props) => {
    let parentClassName = 'sectionContainer'
    let statisticsComponentParentContainer = 'statisticsComponentParentContainer'
    
    /*if (window.innerWidth < 500) {
parentClassName = 'sectionContainer'

statisticsComponentParentContainer = 'statisticsComponentParentContainer'
    }
    else if (window.innerWidth > 500 && props.index === '1') {
        parentClassName = 'sectionContainer1'
      
        statisticsComponentParentContainer = 'statisticsComponentParentContainer1'
    }
     else if (window.innerWidth > 500 && props.index === '2') {
        parentClassName = 'sectionContainer2'
      
        statisticsComponentParentContainer = 'statisticsComponentParentContainer2'
    }
     else if (window.innerWidth > 500 && props.index === '3') {
        parentClassName = 'sectionContainer3'
      
        statisticsComponentParentContainer = 'statisticsComponentParentContainer3'
    }*/

    
    return (
        <div className={parentClassName}>
            <div className={statisticsComponentParentContainer}>
            <img src={props.iconPath} alt={props.altText} className='iconImage'/>
            <h2 className="statisticsComponentDetailTitle">{props.title}</h2>
            <p className="statisticsComponentDetailText">{props.detail}</p>
            
            
        </div>
            
       
        {
          window.innerWidth < 500 && props.index !== '3' ?
 <div className="divider"></div> : window.innerWidth > 500 && props.index !== '3' ? <div className="dividerDesktop"> </div> : ''
        }
       
        </div>
    )
}

export default StatisticsInfoComponent