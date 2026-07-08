import {
  createBrowserRouter,
} from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import Profile from "../pages/Dashboard/Profile/Profile";
import PendingMembers from "../pages/Dashboard/PendingMembers/PendingMembers";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
  path: "/dashboard",
  element: (
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  ),
},
{
  path: "/dashboard",
  element: (
    <PrivateRoute>
      <DashboardLayout />
    </PrivateRoute>
  ),
  children: [
    {
      index: true,
      element: <Dashboard />,
    },
    {
  path: "profile",
  element: <Profile />,
},
{
  path: "pending-members",
  element: <PendingMembers />,
},
  ],
},

]);

export default router;