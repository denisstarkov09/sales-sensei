import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./services/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/home.jsx";
import Pricing from "./routes/pricing";
import SignUp from "./routes/signUp";
import Process1 from "./routes/process1";
import Process2 from "./routes/process2";
import Process3 from "./routes/process3";
import Process4 from "./routes/process4";
import Process5 from "./routes/process5";
import Main from "./routes/main";
import CheckoutForm from "./routes/checkout_form";
import Login from "./routes/login";

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
    element: <Main />,
  },
  {
    path: "/checkout_form",
    element: <CheckoutForm />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
