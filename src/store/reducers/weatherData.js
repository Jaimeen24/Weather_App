import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    dailyData: [],
    searchValue : null,
    loading: false
};

const fetchweatherDataStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchweatherDataSuccess = ( state, action ) => {
    return updateObject( state, {
        dailyData: action.dailyData,
        loading: false
    } );
};

const fetchweatherDataFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_WEATHERDATA_START: return fetchweatherDataStart( state, action );
        case actionTypes.FETCH_WEATHERDATA_SUCCESS: return fetchweatherDataSuccess( state, action );
        case actionTypes.FETCH_WEATHERDATA_FAIL: return fetchweatherDataFail( state, action );
        default: return state;
    }
};

export default reducer;