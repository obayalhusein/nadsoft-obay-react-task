import axios from './axios'

export default async function CountriesAPI() {
    try {
        const response = await axios.get('summary');
        return response && response.data ? response.data : [];
    } catch(err) {
        console.log(err.response);
    }
};