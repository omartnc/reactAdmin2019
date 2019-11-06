import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function saveUserReducer(
  state = initialState.savedUser,
  action
) {
  switch (action.type) {
    case actionTypes.UPDATE_USER_SUCCESS:
      return action.payload;
    case actionTypes.CREATE_USER_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
