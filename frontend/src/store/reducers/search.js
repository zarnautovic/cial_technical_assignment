import * as actionTypes from '../actions/actions';

const initialState = {
    searchResult: [],
    searchParam: ''
}

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.SEARCH) {
        return {
            ...state,
            searchResult: action.searchResult
        }
    }
    if (action.type === actionTypes.SEARCH_INPUT) {
        return {
            ...state,
            searchParam: action.searchParam
        }
    }
    return state;
};

export default reducer;