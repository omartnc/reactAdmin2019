import * as actionTypes from "./actionTypes";
import axios from 'axios';
export async function handleResponse(response) {
    debugger;
    if (response.status===200) {
        return response.data
    }

    const error = await response.text();
    throw error;
}
export function handleError(error) {
    console.error("Bir hata oluştu");
    throw error;
}



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
        let url = "http://api.dogu.tech/api/Authorization/users/list";
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