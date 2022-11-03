import axios from './axios'

export async function ByCountryAPI(slug) {
    try {
        const response = await axios.get(`country/${slug}`);
        return response && response.data ? response.data : [];
    } catch(err) {
        console.log(err.response);
    }
};