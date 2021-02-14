import React from 'react';
import '../CSS/Statistics.css';
import StatisticsInfoComponent from './StatisticsInfoComponent';

const Statistics = () => {
    
    return (
<div className="statisticsParentContainer">
    <h2 className="statisticsHeader">Advanced Statistics</h2>
    <p className="statisticsOverviewText">Track how your links are performing across the web with our advanced statistics dashboard.</p>
    <StatisticsInfoComponent title="Brand Recognition" detail="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content." iconPath="../../images/icon-brand-recognition.svg" altText="Brand Recognition Icon" index="1"/>
    <StatisticsInfoComponent title="Detailed Records" detail="Gain insight into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions." iconPath="../../images/icon-detailed-records.svg" altText="Detailed Records Icon" index="2"/>
    <StatisticsInfoComponent title="Fully Customizable" detail="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement." iconPath="../../images/icon-fully-customizable.svg" altText="Fully Customizable Icon" index="3"/>
   
</div>
    )
}

export default Statistics;
