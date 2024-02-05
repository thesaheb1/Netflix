import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Browse from "./Pages/Browse";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import OpenRoute from "./Authorization/OpenRoute";
import PrivateRoute from "./Authorization/PrivateRoute";
import Search from "./Pages/Search";
import MyProfile from "./Pages/MyProfile";
import Settings from "./Pages/Settings";
const root = ReactDOM.createRoot(document.getElementById("root"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <OpenRoute>
            <Home />
          </OpenRoute>
        ),
      },
      {
        path: "/signin",
        element: (
          <OpenRoute>
            <Signin />
          </OpenRoute>
        ),
      },
      {
        path: "/signup",
        element: (
          <OpenRoute>
            <Signup />
          </OpenRoute>
        ),
      },
      {
        path: "/browse",
        element: (
          <PrivateRoute>
            <Browse />
          </PrivateRoute>
        ),
      },
      {
        path: "/search",
        element: (
          <PrivateRoute>
            <Search />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/settings",
        element: (
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
root.render(
  <Provider store={store}>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  </Provider>
);
