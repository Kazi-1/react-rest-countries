import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Detail from '../Detail/Detail';

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
            {
                country.map(country => <Detail detail={country}></Detail>)
            }
            
        </div>
    );
};

export default CountryDetail;