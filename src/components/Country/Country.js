import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
   const {name, nativeName, capital, region, subregion, area, population, timezones, alpha3Code, flag, currencies} = props.country;
//    const handleAddCountry = () => {console.log('added')}
   const countryStyle = {
       border: '1px solid purple',
       margin: '20px',
       padding: '20px',
       borderRadius:'20px',
       display: 'flex'
   }
    return (
        <div style={countryStyle}>
            <h1>name: {name}</h1>
            <h3>nativeName: {nativeName}</h3> 
            <h2>capital: {capital}</h2>
            {/* <h3>region: {region}</h3>
            <h3>subregion: {subregion}</h3> 
            <h3>area: {area}</h3>
            <h3>population: {population}</h3>
            <h3>timezones: {timezones}</h3>
            <h3>alpha3Code: {alpha3Code}</h3> */}
            <img style={{height: '50px'}} src={flag} alt=""/>
            {/* <h3>languages: {languages.map(lan => lan={languages}}</h3> */}
            <h3>About: <Link to={`/country/${name}`}>Show Detail of  {name} </Link></h3>
        </div>
    );
};

export default Country;