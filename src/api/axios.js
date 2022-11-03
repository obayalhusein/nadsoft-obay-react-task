import axios from "axios";

axios.defaults.baseURL = 'https://api.covid19api.com';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default axios;