import * as actionTypes from "../actions/actionTypes"
import isEmpty from '../../validation/is-empty';
import initialState from "./initialState";

const InitialState={
    isAuthenticated:initialState.isAuthenticated,
    currentUser:initialState.currentUser
}

export default function authReducer(state=InitialState,action){
    switch (action.type) {
        case actionTypes.SET_CURRENT_USER_SUCCESS:
            return {
                isAuthenticated: !isEmpty(action.payload),
                currentUser: action.payload
              };
        default:
            return state;
    }
}