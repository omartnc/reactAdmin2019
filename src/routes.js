/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "./components/views/Dashboard.jsx";
import UserList from "./components/views/users/UserList";
import AddOrUpdateUser from "./components/views/users/AddOrUpdateUser";

import AuthorizationList from "./components/views/Authorization/AuthorizationList";
import AuthorizationEdit from "./components/views/Authorization/AuthorizationEdit";
import AuthorizationItemEdit from "./components/views/Authorization/AuthorizationItemEdit";
import UserAuthorizationEdit from "./components/views/Authorization/UserAuthorizationEdit";


var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    name: "System Management"
  },


  {
    path: "/users",
    name: "Users",
    icon: "tim-icons icon-settings-gear-63",
    component: UserList,
    layout: "/admin"
  },
  {
    path: "/save-user/:userId",
    name: "User Detail",
    icon: "tim-icons icon-settings-gear-63",
    component: AddOrUpdateUser,
    layout: "/admin",
    redirect:true
  },
  {
    path: "/save-user",
    name: "User Detail",
    icon: "tim-icons icon-settings-gear-63",
    component: AddOrUpdateUser,
    layout: "/admin",
    redirect:true
  },



  {
    path: "/authorization/authorization-list",
    name: "Authorization List",
    icon: "tim-icons icon-settings-gear-63",
    component: AuthorizationList,
    layout: "/admin"
  },
  {
    path: "/authorization/save-authorization/:authorizationId",
    name: "Authorization Detail",
    icon: "tim-icons icon-settings-gear-63",
    component: AuthorizationEdit,
    layout: "/admin",
    redirect:true
  },
  {
    path: "/authorization/save-authorization",
    name: "Authorization Detail",
    icon: "tim-icons icon-settings-gear-63",
    component: AuthorizationEdit,
    layout: "/admin",
    redirect:true
  },
  {
    path: "/authorization/save-authorization-item",
    name: "Authorization Item Detail",
    icon: "tim-icons icon-settings-gear-63",
    component: AuthorizationItemEdit,
    layout: "/admin",
    redirect:true
  },
  {
    path: "/authorization/save-authorization-item/:authorizationId",
    name: "Authorization Item Detail",
    icon: "tim-icons icon-settings-gear-63",
    component: AuthorizationItemEdit,
    layout: "/admin",
    redirect:true
  },
  {
    path: "/authorization/save-user-authorization/:userId",
    name: "User Authorization Detail",
    icon: "tim-icons icon-settings-gear-63",
    component: UserAuthorizationEdit,
    layout: "/admin",
    redirect:true
  }
];
export default routes;
