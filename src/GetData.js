import apiFetchData from './stackline_frontend_assessment_data_2021.json';
import { combineReducers } from 'redux';

export const FETCH_API = 'FETCH_API';

const fetchAPIData = () =>
    new Promise(resolve => {
        setTimeout(() =>
            resolve(apiFetchData[0]), 1000);
    });

export const fetchData = () => {
  return dispatch => {
      fetchAPIData().then(data => {
        dispatch({
          type: "FETCH_API",
          payload: data
        });
      });
  }
};

const initialState = {
  productData: [],
  loading: false
};

const dataFetchReducer = (state = initialState, action) => {
  switch (action.type) {
      case FETCH_API:
          return {
              ...state,
              productData: action.payload,
              loading: true
          };
      default:
          return state;
  }
};

export const combinedReducers = combineReducers({
    dataFetchReducer
});
