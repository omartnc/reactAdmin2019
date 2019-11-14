import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function saveAuthorizationReducer(
  state = initialState.savedAuthorization,
  action
) {
  switch (action.type) {
    case actionTypes.UPDATE_AUTHORIZATIONS_SUCCESS:
      return action.payload;
    case actionTypes.CREATE_AUTHORIZATIONS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
