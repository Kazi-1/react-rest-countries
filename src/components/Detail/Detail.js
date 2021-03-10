import React from 'react';
import './Detail.css';

const Detail = (props) => {
    const { name, nativeName, capital, region, subregion, area, population, timezones, alpha3Code, flag, currencies } = props.detail
    return (
        <div className="country">
            <div className='image'>
                <img src={flag} alt="" />
            </div>
            <div className='country-details'>
                <h1>name: {name}</h1>
                <h3>nativeName: {nativeName}</h3>
                <h2>capital: {capital}</h2>
                <h3>region: {region}</h3>
                <h3>subregion: {subregion}</h3>
                <h3>area: {area}</h3>
                <h3>population: {population}</h3>
                <h3>timezones: {timezones}</h3>
                <h3>alpha3Code: {alpha3Code}</h3>
                <h3>currencies: {currencies.map(c => c.name)}</h3>
            </div>
            {/* {/* <h3>languages: {languages.map(lan => lan={languages}}</h3> */}
        </div>
    );
};

export default Detail;