import { useEffect, useState } from 'react';
import axios from './axios'

export default function ByCountryAPI(slug) {
    const [country, setCountry] = useState([]);
    
    useEffect(() => {
        axios.get(`country/${slug}`).then(res => {
            setCountry(res.data);
        })
    }, []);

    return country;
};