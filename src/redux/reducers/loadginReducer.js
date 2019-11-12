import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function loadingReducer(
  state = initialState.isLoading,
  action
) {
  switch (action.type) {
    case actionTypes.SET_LOADING_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}