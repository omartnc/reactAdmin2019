import * as actionTypes from "./actionTypes";
import handleResponse from "../../utils/handleResponse";
import handleError from "../../utils/handleError";
import handleLoading from "../../utils/handleLoading";
import axios from 'axios';




export function getAuthorizationItemsSuccess(authorizationItems) {
    return { type: actionTypes.GET_AUTHORIZATIONITEMS_SUCCESS, payload: authorizationItems }
}

export function createAuthorizationItemsSuccess(authorizationItems) {
    return { type: actionTypes.CREATE_AUTHORIZATIONITEMS_SUCCESS, payload: authorizationItems }
}

export function updateAuthorizationItemsSuccess(authorizationItems) {
    return { type: actionTypes.UPDATE_AUTHORIZATIONITEMS_SUCCESS, payload: authorizationItems }
}


export function getAuthorizationItems(authorizationId) {
    debugger;
    return function (dispatch) {
        let url = "/api/Authorization/authorisation-group-permissions/edit/"+authorizationId;
        handleLoading(true);
        return axios
            .get(url)
            .then(handleResponse)
            .then(result => dispatch(getAuthorizationItemsSuccess(result)))
            .catch(handleError);
    };
}

export function saveAuthorizationItemsApi(authorizationItems,authorizationId) {
    let url  = "/api/Authorization/authorisation-group-permissions/edit/" + authorizationId;
    handleLoading(true);
    return axios
        .post(url, authorizationItems)
        .then(handleResponse)
        .catch(handleError);
}
export function saveAuthorizationItems(authorizationItems,authorizationId) {
    return function (dispatch) {
        return saveAuthorizationItemsApi(authorizationItems,authorizationId)
            .then(savedAuthorizationItems => {
                authorizationId
                    ? dispatch(updateAuthorizationItemsSuccess(savedAuthorizationItems))
                    : dispatch(createAuthorizationItemsSuccess(savedAuthorizationItems));
            })
            .catch(handleError);
    };
}