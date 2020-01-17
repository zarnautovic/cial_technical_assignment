import * as actionTypes from '../actions/actions';
import { getHistory } from '../../api/getHistory';

const initialState = {
    searchHistory: []
}

const saveHistory = (state, action) => {
    let history = [ ...state.searchHistory];
        if (history.indexOf(action.searchTerm) === -1) {
            history.push(action.searchTerm)
        }
        return {
            ...state,
            searchHistory: history
        }
};

const history = (state, action) => {
    return {
        ...state,
        searchHistory: action.searchHistory
    }
};

const reducer = (state = initialState, action) => {
    switch( action.type ) {
        case actionTypes.SAVE_HISTORY : return saveHistory(state, action);
        case actionTypes.GET_HISTORY: return history(state, action);
    }
    return state;
};

export default reducer;