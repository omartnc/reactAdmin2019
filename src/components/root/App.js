import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../utils/setAuthToken';
import { setCurrentUser, logoutUser } from '../../redux/actions/authActions';
import PrivateRoute from '../../components/common/PrivateRoute';
import AdminLayout from "./Admin";
import LoginLayout from "./Login";
import NotFound from "../common/NotFound";


const hist = createBrowserHistory();
class App extends Component {

  render() {

    // Check for token
    if (localStorage.jwtToken) {
      // Set auth token header auth
      setAuthToken(localStorage.jwtToken);
      // Decode token and get user info and exp
      const decoded = jwt_decode(localStorage.jwtToken);
        debugger;
      // Set user and isAuthenticated
      //this.props.actions.setCurrentUser(decoded);  

      // Check for expired token
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        // Logout user
        this.props.actions.logoutUser();
        // Redirect to login
        window.location.href = '/login';
      }
    }
    return (
      <Router history={hist}>
        <Switch>
          <Route path="/login" render={props => <LoginLayout {...props} />} />
          <PrivateRoute path="/admin" render={props => <AdminLayout {...props} />} />
          <PrivateRoute from="/" to="/admin/dashboard" render={props => <AdminLayout {...props} />} />
          <Route component={NotFound} />
        </Switch>
      </Router>
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
