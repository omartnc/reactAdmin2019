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
import UserProfile from "./components/views/users/UserProfile";

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
    component: UserProfile,
    layout: "/admin",
    redirect:true
  }
];
export default routes;
