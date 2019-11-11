import * as actionTypes from "./actionTypes";
import  handleResponse from "../../utils/handleResponse";
import  handleError from "../../utils/handleError";
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
      return  axios
    .get(url)
    .then(handleResponse)
    .then(result => dispatch(getUsersSuccess(result)))
    .catch(handleError);
    };
}

export function saveUserApi(user) {
    return fetch("", {
        method: user.id ? "PUT" : "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user)
    })
        .then(handleResponse)
        .catch(handleError);
}
export function saveUser(user) {
    return function (dispatch) {
        return saveUserApi(user)
            .then(handleResponse)
            .then(savedUser => {
                user.id
                    ? dispatch(updateUserSuccess(savedUser))
                    : dispatch(createUserSuccess(savedUser));
            })
            .catch(handleError);
    };
}