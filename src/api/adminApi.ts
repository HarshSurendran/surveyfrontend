import axios from "axios";
import apiErrorHandler from "../utils/apiErrorHandler";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
});

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
}, (error) => Promise.reject(error));

export const login = async (loginData: {email: string, password: string}) => {
    try {
        const response = await api.post('/admin/login', loginData);
        console.log(response, "response from login")
        if (response) {
            return response.data;
        }
    } catch (error) {
        apiErrorHandler(error);
    }
}

export const getSurveys = async (page: number, limit: number, searchTerm?: string) => {
    try {
        const response = await api.get(`/admin/surveys?page=${page}&limit=${limit}&searchTerm=${searchTerm}`);
        if (response) {
            return response.data;
        }
    } catch (error) {
        apiErrorHandler(error);
    }
}