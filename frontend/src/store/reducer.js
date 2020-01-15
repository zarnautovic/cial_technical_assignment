import * as actionTypes from './actions/actions';

const initialState = {
    searchResult: [],
    searchHistory: [],
    searchParam: ''
}

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.SEARCH) {
        return {
            ...state,
            searchResult: action.searchResult
        }
    }
    return state;
};

export default reducer;