import axios from 'axios';

import * as settings from '../settings';

export const getHistory = async () => {
    try {
        const response  = await axios.get(`${settings.API_URL}/history`);
        return response.data.searchHistory;
    } catch (error) {
        return error;
    }
};