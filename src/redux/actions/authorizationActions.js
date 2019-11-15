import * as actionTypes from "./actionTypes";
import handleResponse from "../../utils/handleResponse";
import handleError from "../../utils/handleError";
import handleLoading from "../../utils/handleLoading";
import axios from 'axios';




export function getAuthorizationsSuccess(authorizations) {
    return { type: actionTypes.GET_AUTHORIZATIONS_SUCCESS, payload: authorizations }
}

export function createAuthorizationSuccess(authorization) {
    return { type: actionTypes.CREATE_AUTHORIZATIONS_SUCCESS, payload: authorization }
}

export function updateAuthorizationSuccess(authorization) {
    return { type: actionTypes.UPDATE_AUTHORIZATIONS_SUCCESS, payload: authorization }
}

export function getAuthorizations() {
    return function (dispatch) {
        let url = "/api/Authorization/authorisation-group/list";
        handleLoading(true);
        return axios
            .get(url)
            .then(handleResponse)
            .then(result => dispatch(getAuthorizationsSuccess(result)))
            .catch(handleError);
    };
}

export function saveAuthorizationApi(authorization) {
    let url = "";
    authorization.id ? url = "/api/Authorization/authorisation-group/edit/" + authorization.id : url = "/api/Authorization/authorisation-group/edit"
    handleLoading(true);
    return axios
        .post(url, authorization)
        .then(handleResponse)
        .catch(handleError);
}
export function saveAuthorization(authorization) {
    return function (dispatch) {
        return saveAuthorizationApi(authorization)
            .then(savedAuthorization => {
                authorization.id
                    ? dispatch(updateAuthorizationSuccess(savedAuthorization))
                    : dispatch(createAuthorizationSuccess(savedAuthorization));
            })
            .catch(handleError);
    };
}