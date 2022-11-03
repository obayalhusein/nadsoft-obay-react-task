import axios from './axios'

export async function ByCountryAPI(slug) {
    try {
        const response = await axios.get(`country/${slug}?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z`);
        return response && response.data ? response.data : [];
    } catch(err) {
        console.log(err.response);
    }
};