import axios from 'axios';

const baseURL = "http://localhost:8080";
const axiosInstance = axios.create({
    baseURL,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        console.log("Request config", config);
        return config;
    },
    (error) => {
        console.log("Request error", error);
        return Promise.reject(error);
    }
);

const SignUpMember = (name, email, password, contact, role) => axiosInstance.post('/users/auth/register', { name, email, password, contact, role });
const SignUpManager = (name, email, password, contact, role) => axiosInstance.post('/users/auth/register/pm', { name, email, password, contact, role });

export { axiosInstance, SignUpManager, SignUpMember }