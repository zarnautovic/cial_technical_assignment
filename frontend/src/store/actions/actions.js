import { searchResultWithGet, searchResultWithPost } from '../../api/getSearchResult';
import { getHistory } from '../../api/getHistory';

export const SEARCH = 'SEARCH';
export const HISTORY = 'HISTORY';
export const SEARCH_INPUT = 'SEARCH_INPUT';
export const GET_HISTORY = 'GET_HISTORY';
export const ERROR = 'ERROR';

export const search = (response, type) => {
    return {
        type: type,
        searchResult: response
    }
};

export const storeResponse = (searchParam, searchWithPost) => {
    return async dispatch => {
        if (searchWithPost) {
            try {
                const response = await searchResultWithPost(searchParam);
                dispatch(search(response, SEARCH));
                dispatch(saveSearchParam(searchParam));
            }  catch(error) {
                const { data } = error.response;
                dispatch(search(data, ERROR));
            }
        } else {
            try {
                const response = await searchResultWithGet(searchParam);
                dispatch(search(response, SEARCH));
                dispatch(saveSearchParam(searchParam));
            }  catch(error) {
                const { data } = error.response;
                console.log(data);
                dispatch(search(data, ERROR));
            }
            
        }
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