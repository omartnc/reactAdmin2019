import * as actionTypes from "../actions/actionTypes"
import isEmpty from '../../validation/is-empty';
import initialState from "./initialState";

const initialStateCnst = {
    isAuthenticated: initialState.isAuthenticated,
    user: initialState.savedUser
  };

export default function authReducer(state=initialStateCnst,action){
    switch (action.type) {
        case actionTypes.SET_CURRENT_USER_SUCCESS:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
              };
        default:
            return state;
    }
}