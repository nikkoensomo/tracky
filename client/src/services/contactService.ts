import api from "../api/axios";
import type { ContactFormData } from "../types/contact.types";

export const sendContactMessageService = async (payload: ContactFormData) => {
    const response = await api.post('/contact/', payload);
    return response.data;
}   