import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import AdminLayout from "../root/Admin";

const PrivateRoute = ({ component: Component, authReducer,to , ...rest}) => (
  
  <Route
    {...rest}
    render={props =>
      authReducer.isAuthenticated === true ? (
        <AdminLayout  {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);



function mapStateToProps(state) {
  return {
    authReducer: state.authReducer
  };
}


export default connect(
  mapStateToProps
)(PrivateRoute);


