
// import Landing from "../pages/Landing";

import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPassword from "../pages/Authentication/ForgetPassword";

import View from "../pages/View";
import New from "../pages/New";
import Search from "../pages/Search";

const authProtectedRoutes = [	
	{ path: "/view", exact: true, component: View },	
	{ path: "/new", exact: true, component: New },	
	{ path: "/search", exact: true, component: Search },	
];

const publicRoutes = [
  { path: "/", exact: true, component: Login },  
	{ path: "/login", component: Login },
	{ path: "/logout", component: Logout },
	{ path: "/register", component: Register },
	{ path: "/forgetpassword", component: ForgetPassword },
];

export { authProtectedRoutes, publicRoutes };
