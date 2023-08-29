import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./services/store";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./routes/home.jsx";
import Pricing from "./routes/pricing";
import SignUp from "./routes/signUp";
import Main from "./routes/main";
import CheckoutForm from "./routes/checkout_form";
import Login from "./routes/login";

const Process1 = React.lazy(() => import("./routes/process1.jsx"));
const Process2 = React.lazy(() => import("./routes/process2.jsx"));
const Process3 = React.lazy(() => import("./routes/process3.jsx"));
const Process4 = React.lazy(() => import("./routes/process4.jsx"));
const Process5 = React.lazy(() => import("./routes/process5.jsx"));

const isAuthenticated = localStorage.getItem("isLogined") === 1 ? true : false;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/signUp/one",
    element: <Process1 />,
  },
  {
    path: "/signUp/two",
    element: <Process2 />,
  },
  {
    path: "/signUp/three",
    element: <Process3 />,
  },
  {
    path: "/signUp/four",
    element: <Process4 />,
  },
  {
    path: "/signUp/five",
    element: <Process5 />,
  },
  {
    path: "/main",
    element: isAuthenticated === 1 ? <Main /> : <Login />,
  },
  {
    path: "/checkout_form",
    element: isAuthenticated === 1 ? <CheckoutForm /> : <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
