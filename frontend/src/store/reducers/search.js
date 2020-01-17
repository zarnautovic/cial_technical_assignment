import * as actionTypes from '../actions/actions';

const initialState = {
    searchResult: [],
    searchParam: '',
    searchWithPost:false,
    error: {}
}

const search = (state, action) => {
    return {
        ...state,
        searchResult: action.searchResult,
        error: {}
    }
};

const searchInput = (state, action) => {
    return {
        ...state,
        searchParam: action.searchParam
    }
};

const error = (state, action) => {
    return {
        ...state,
        error: action.searchResult
    }
};

const toogle = (state) => {
    return {
        ...state,
        searchWithPost: !state.searchWithPost
    }
};

const reducer = (state = initialState, action) => {
    switch( action.type ) {
        case actionTypes.SEARCH : return search(state, action);
        case actionTypes.SEARCH_INPUT : return searchInput(state, action);
        case actionTypes.ERROR : return error(state, action);
        case actionTypes.TOOGLE : return toogle(state);
        default:
    }
    return state;
};

export default reducer;