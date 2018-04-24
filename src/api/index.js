import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8989";
axios.interceptors.response.use((res) => {
    return res.data;
})

export default axios;