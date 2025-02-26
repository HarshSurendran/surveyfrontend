import axios from "axios";
import apiErrorHandler from "../utils/apiErrorHandler";
import { ISurvey } from "../Interfaces/ISurvey";


const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
});

export const submitForm = async (formData: ISurvey ) : Promise<{ status: boolean, data: Object}| null > => {
    try {
        const response = await api.post('/survey', formData);
        if (response) {
            return response.data;
        } else {
            return null;
        }        
    } catch (error) {
        apiErrorHandler(error);
        return null;
    }
}

export const getSurveys = async (page: number, limit: number, searchTerm?: string) : Promise<{ status: boolean, data: {surveys: ISurvey[], totalDocs: number}} | null > => {
    try {
        const response = await api.get(`/surveys?page=${page}&limit=${limit}&searchTerm=${searchTerm}`);
        if (response) {
            return response.data;
        } else {
            return null;
        }        
    } catch (error) {
        apiErrorHandler(error);
        return null;
    }
}