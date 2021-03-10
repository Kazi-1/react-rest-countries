import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css';

const Country = (props) => {
    const { name, capital, region, population, area, flag } = props.country;
    //    const handleAddCountry = () => {console.log('added')}
    
    return (
        <div className="country">
            <div className='image'>
                <img src={flag} alt="" />
            </div>
            <div className='country-details'>
                <h1>name: {name}</h1>
                <h3>capital: {capital}</h3>
                <h2>region: {region}</h2>
                <h3>population: {population}</h3>
                <h3>area: {area}</h3>
                {/* <h3>languages: {languages.map(lan => lan={languages}}</h3> */}
                <h3>About: <Link to={`/country/${name}`}>Show Detail of  {name} </Link></h3>
            </div>
        </div>
    );
};

export default Country;