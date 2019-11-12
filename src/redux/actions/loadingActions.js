
import * as actionTypes from "./actionTypes";

export const setTrueLoading = isLoading => {
    return {
      type: actionTypes.SET_TRUE_LOADING_SUCCESS,
      payload: isLoading
    };
  };
  export const setFalseLoading = isLoading => {
    return {
      type: actionTypes.SET_FALSE_LOADING_SUCCESS,
      payload: isLoading
    };
  };
