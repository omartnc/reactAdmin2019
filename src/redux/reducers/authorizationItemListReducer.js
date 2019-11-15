import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function authorizationItemListReducer(state=initialState.authorizationItems,action){
    switch (action.type) {
        case actionTypes.GET_AUTHORIZATIONITEMS_SUCCESS:
            return action.payload
        default:
            return state;
    }
}