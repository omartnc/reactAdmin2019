import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import  handleResponse from "../../utils/handleResponse";
import  handleError from "../../utils/handleError";
import jwt_decode from 'jwt-decode';

import * as actionTypes from "./actionTypes";



// Login - Get User Token
export const loginUser = userData => dispatch => {
  axios
    .post('/api/Auth/login', userData)
    .then(handleResponse)
    .then(res => {
      // Save to localStorage
      const  token  = "Bearer "+res.token;
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
  debugger;
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
