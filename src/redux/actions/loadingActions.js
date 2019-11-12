
import * as actionTypes from "./actionTypes";

export function setLoadingSuccess(isLoading) {
  return { type: actionTypes.SET_LOADING_SUCCESS, payload: isLoading }
}


export function setLoading(isLoading) {
  debugger
  return function (dispatch) {
    dispatch(setLoadingSuccess(isLoading));
  };
}