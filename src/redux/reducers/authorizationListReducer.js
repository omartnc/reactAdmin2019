import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function authorizationListReducer(state=initialState.authorizations,action){
    switch (action.type) {
        case actionTypes.GET_AUTHORIZATIONS_SUCCESS:
            return action.payload
        default:
            return state;
    }
}