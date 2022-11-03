import { useEffect, useState } from 'react';
import axios from './axios'

export default function ByCountryAPI(slug) {
    const [country, setCountry] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get(`country/${slug}`);
                if(response && response.data) setCountry(response.data);
            } catch(err) {
                console.log(err.response);
            }
        }
        fetch()
    }, []);

    return country;
};