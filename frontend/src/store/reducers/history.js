import * as actionTypes from '../actions/actions';

const initialState = {
    searchHistory: []
}

const reducer = (state = initialState, action) => {

    if (action.type === actionTypes.HISTORY) {
        let history = [ ...state.searchHistory];
        if (history.indexOf(action.searchTerm) === -1) {
            history.push(action.searchTerm)
        }
        return {
            ...state,
            searchHistory: history
        }
    }

    if (action.type === actionTypes.GET_HISTORY) {
        return {
            ...state,
            searchHistory: action.searchHistory
        }
    }

    return state;
};

export default reducer;