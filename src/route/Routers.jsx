import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/homeRoute/Home";
import Contact from "../pages/homeRoute/Contact";
import About from "../pages/homeRoute/About";
import Login from "../pages/homeRoute/Login";
import Register from "../pages/homeRoute/Register";
import DashboardLayout from "../layout/DashboardLayout";
import DahsHome from "../pages/dashboardRoute/DahsHome";
import Today from "../pages/dashboardRoute/Today";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <h2>This is Error page</h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <h2>This is Error page</h2>,
    children: [
      {
        path: "/dashboard",
        element: <Today />,
      },
    ],
  },
]);

export default router;
