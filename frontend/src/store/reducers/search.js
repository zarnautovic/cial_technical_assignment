import * as actionTypes from '../actions/actions';

const initialState = {
    searchResult: [],
    searchParam: '',
    searchWithPost:false,
    error: {}
}

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.SEARCH) {
        return {
            ...state,
            searchResult: action.searchResult,
            error: {}
        }
    }
    if (action.type === actionTypes.SEARCH_INPUT) {
        return {
            ...state,
            searchParam: action.searchParam
        }
    }
    if (action.type === actionTypes.ERROR) {
        return {
            ...state,
            error: action.searchResult
        }
    }
    if (action.type === actionTypes.TOOGLE) {
        return {
            ...state,
            searchWithPost: !state.searchWithPost
        }
    }
    return state;
};

export default reducer;