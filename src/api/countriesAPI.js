import { useEffect, useState } from 'react';
import axios from './axios'

export default function CountriesAPI() {

    const [countries, setCountries] = useState([]);
    
    useEffect(() => {
        axios.get('countries').then(res => {
            setCountries(res.data);
        })
    }, []);

    return countries;
};