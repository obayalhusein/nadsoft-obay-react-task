import { useEffect, useState } from 'react';
import axios from './axios'

export default function Countries() {

    const [countries, setCountries] = useState([]);
    
    useEffect(() => {
        axios.get('countries').then(res => {
            setCountries(res.data);
        })
    }, []);

    return countries;
};