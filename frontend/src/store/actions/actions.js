import { searchResultWithGet } from '../../api/getSearchResult';
import { getHistory } from '../../api/getHistory';

export const SEARCH = 'SEARCH';
export const HISTORY = 'HISTORY';
export const SEARCH_INPUT = 'SEARCH_INPUT';
export const GET_HISTORY = 'GET_HISTORY';

export const search = (response) => {
    return {
        type: SEARCH,
        searchResult: response
    }
};

export const storeResponse = (searchParam) => {
    return async dispatch => {
        const response = await searchResultWithGet(searchParam);
        dispatch(search(response));
    }
};

export const saveSearchParam = (searchTerm) => {
    return {
        type: HISTORY,
        searchTerm: searchTerm
    }
};

export const searchInputChange = (searchParam) => {
    return {
        type: SEARCH_INPUT,
        searchParam: searchParam
    }
};

export const history = (response) => {
    return {
        type: GET_HISTORY,
        searchHistory: response
    }
};

export const fetchHistory = () => {
    return async dispatch => {
        const response = await getHistory();
        dispatch(history(response));
    }
};