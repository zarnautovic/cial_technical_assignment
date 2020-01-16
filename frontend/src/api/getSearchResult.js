import axios from 'axios';

export const searchResultWithGet = async (searchTerm) => {
    try {
        const response = await axios.get(`http://localhost:8080/search?searchParam=${searchTerm}`)
        return response.data;   
    } catch (error) {
        return error;
    }
};

export const searchResultWithPost = async (searchTerm) => {
    try {
        const response = await axios.post('http://localhost:8080/search', {
        searchParam: searchTerm
    });
    return response.data;
    } catch (error) {
        return error;
    }
};