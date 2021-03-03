import * as actionTypes from './actionTypes';
import axios from '../../axios-weather';

export const fetchWeatherDataSuccess = (dailyData ) => {
    return {
        type: actionTypes.FETCH_WEATHERDATA_SUCCESS,
       dailyData:dailyData
    };
};

export const fetchWeatherDataFail = ( error ) => {
    return {
        type: actionTypes.FETCH_WEATHERDATA_FAIL,
        error: error
    };
};
export const set_searchValue=(data)=>{
    return{
        type:actionTypes.SET_DATA,
         data:data
    }
}

export const fetchWeatherDataStart = () => {
    return {
        type: actionTypes.FETCH_WEATHERDATA_START
    };
};

export const fetchWeatherData = (zipcode) => {
    return dispatch => {
        console.log("00",zipcode,"00");
        dispatch(fetchWeatherDataStart(zipcode));
        const queryParams = '?zip=' + zipcode + ',IN&appid=8e333704be69bb431beb520f7e781ad9';
        axios.get( '/forecast' +  queryParams)
            .then( res => {
                const dailyData = res.data.list.filter(read => read.dt_txt.includes("15:00:00"));
                dispatch(fetchWeatherDataSuccess(dailyData));
            } )
            .catch( err => {
                dispatch(fetchWeatherDataFail(err));
            } );
    };
};