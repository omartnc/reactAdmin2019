import * as actionTypes from "./actionTypes";
export async function handleResponse(response) {
    if (response.ok) {
        return response.json()
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
        return fetch(url, {
        headers: { "Authorization": "Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJlbWFpbCI6ImEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJBdXRob3JpemF0aW9uIiwiQXV0aG9yaXphdGlvbi5MaXN0IiwiVXNlci5MaXN0IiwiVXNlci5FZGl0Il0sIm5iZiI6MTU3MzA0NzQ4MCwiZXhwIjoxNTczMDQ3OTkwLCJpc3MiOiJ3d3cuZW5naW4uY29tIiwiYXVkIjoid3d3LmVuZ2luLmNvbSJ9.1oU0iMsb5kQkcVPTuZB0ToOnbByq8cZlPl3tcR-zhXs" }
        })
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