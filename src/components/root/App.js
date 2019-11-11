import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect, Provider } from "react-redux";
import store from '../../redux/reducers/store';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../utils/setAuthToken';
import { setCurrentUser, logoutUser } from '../../redux/actions/authActions';
import PrivateRoute from '../../components/common/PrivateRoute';
import AdminLayout from "./Admin";
import LoginLayout from "./Login";
import NotFound from "../common/NotFound";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = '/login';
  }
}

const hist = createBrowserHistory();
class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={hist}>
          <Switch>
            <Route path="/login" render={props => <LoginLayout {...props} />} />
            <PrivateRoute path="/admin" render={props => <AdminLayout {...props} />} />
            <PrivateRoute path="/" to="/admin/dashboard" render={props => <AdminLayout {...props} />} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

function mapStateToProps(state) {
  return {
    authReducer: state.authReducer
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: {
      setCurrentUser: bindActionCreators(setCurrentUser, dispatch),
      logoutUser: bindActionCreators(logoutUser, dispatch),
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
