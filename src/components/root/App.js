import React from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "./Admin";
import LoginLayout from "./Login";
import NotFound from "../common/NotFound";

const hist = createBrowserHistory();
function App() {
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/login" render={props => <LoginLayout {...props} />} />
        <Route path="/admin" render={props => <AdminLayout {...props} />} />
        <Redirect from="/" to="/admin/dashboard" />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
