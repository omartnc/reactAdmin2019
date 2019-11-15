import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function saveAuthorizationItemsReducer(
  state = initialState.savedAuthorizationItems,
  action
) {
  switch (action.type) {
    case actionTypes.UPDATE_AUTHORIZATIONITEMS_SUCCESS:
      return action.payload;
    case actionTypes.CREATE_AUTHORIZATIONITEMS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
