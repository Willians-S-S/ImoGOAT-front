import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://imogoat-api.onrender.com'
});

export default apiClient;