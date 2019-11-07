import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import * as actionTypes from "./actionTypes";
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


// Login - Get User Token
export const loginUser = userData => dispatch => {
    debugger;
  axios
    .post('http://api.dogu.tech/api/Auth/login', userData)
    .then(handleResponse)
    .then(res => {
      // Save to localStorage
      const  token  = res.token;
      // Set token to ls
      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(handleError);
    
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: actionTypes.SET_CURRENT_USER_SUCCESS,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
