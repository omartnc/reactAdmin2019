import * as actionTypes from "../actions/actionTypes"
import isEmpty from '../../validation/is-empty';
import initialState from "./initialState";



export default function authReducer(state=initialState.auth,action){
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