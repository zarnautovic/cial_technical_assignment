import axios from 'axios';

import * as settings from '../settings';

export const searchResultWithGet = async (searchTerm) => {
    try {
        const response = await axios.get(`${settings.API_URL}/search?searchParam=${searchTerm}`)
        return response.data;   
    } catch (error) {
        throw error;
    }
};

export const searchResultWithPost = async (searchTerm) => {
    try {
        const response = await axios.post(`${settings.API_URL}/search`, {
        searchParam: searchTerm
    });
    return response.data;
    } catch (error) {
        throw error;
    }
};