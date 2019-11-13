import * as actionTypes from "./actionTypes";
import handleResponse from "../../utils/handleResponse";
import handleError from "../../utils/handleError";
import handleLoading from "../../utils/handleLoading";
import axios from 'axios';




export function getUsersSuccess(users) {
    return { type: actionTypes.GET_USERS_SUCCESS, payload: users }
}

export function createUserSuccess(user) {
    return { type: actionTypes.CREATE_USER_SUCCESS, payload: user }
}

export function updateUserSuccess(user) {
    return { type: actionTypes.UPDATE_USER_SUCCESS, payload: user }
}

export function getUsers() {
    return function (dispatch) {
        let url = "/api/Authorization/users/list";
        handleLoading(true);
        return axios
            .get(url)
            .then(handleResponse)
            .then(result => dispatch(getUsersSuccess(result)))
            .catch(handleError);
    };
}

export function saveUserApi(user) {
    debugger;
    let url = "";
    user.id ? url = "/api/Auth/update/" + user.id : url = "/api/Auth/register"
    handleLoading(true);
    return axios
        .post(url, user)
        .then(handleResponse)
        .catch(handleError);
}
export function saveUser(user) {
    return function (dispatch) {
        return saveUserApi(user)
            .then(savedUser => {
                user.id
                    ? dispatch(updateUserSuccess(savedUser))
                    : dispatch(createUserSuccess(savedUser));
            })
            .catch(handleError);
    };
}