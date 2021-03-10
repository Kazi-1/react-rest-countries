import React from 'react';
import { useEffect, useState } from 'react';
import Country from '../Country/Country';


const Home = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])
    return (
        <div>
            <h1 style={{ textAlign: 'center', fontSize: '50px', color: 'red', position: 'fixed', top: '0', left: '500px', hight: '100px', padding: '5px 300px', backgroundColor: 'yellow', marginBottom: '5px' }}>Country List: {countries.length} </h1>
            {
                countries.map(country => <Country country={country} key={country.alpha3Code}></Country>)
            }
        </div>
    );
};

export default Home;