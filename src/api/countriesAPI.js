import { useEffect, useState } from 'react';
import axios from './axios'

export default function CountriesAPI() {

    const [countries, setCountries] = useState([]);
    
    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get('countries');
                if(response && response.data) setCountries(response.data);
            } catch(err) {
                console.log(err.response);
            }
        }
        fetch()
    }, []);

    return countries;
};