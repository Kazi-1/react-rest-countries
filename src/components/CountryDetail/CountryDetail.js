import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetail = () => {
    const {countryId} = useParams();
    const [country, setCountry] = useState([]);
    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/name/${countryId}`
        fetch(url)
        .then(res => res.json())
        .then(data =>  setCountry(data))
        .catch(error => console.log(error))
      
    }, [])
    return (
        <div>
            <p>this is a country detail component: {countryId}</p>
            
            {
                country.map(country => country.name)
            }
            
        </div>
    );
};

export default CountryDetail;