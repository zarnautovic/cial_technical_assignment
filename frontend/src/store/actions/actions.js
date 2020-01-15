import axios from 'axios';
export const SEARCH = 'SEARCH';


export const search = async () => {
    const response = await axios.get(`http://localhost:8080/search?searchParam=google`)
    return {
        type: SEARCH,
        searchResult: response.data
    }
}