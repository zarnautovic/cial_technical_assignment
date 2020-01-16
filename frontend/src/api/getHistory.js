import axios from 'axios';

export const getHistory = async () => {
    try {
        const response  = await axios.get('http://localhost:8080/history');
        return response.data.searchHistory;
    } catch (error) {
        return error;
    }
};