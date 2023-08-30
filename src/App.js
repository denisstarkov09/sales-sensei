import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { AuthContext } from "./context/auth";

import Home from "./routes/home.jsx";
import Pricing from "./routes/pricing";
import SignUp from "./routes/signUp";
import Main from "./routes/main";
import CheckoutForm from "./routes/checkout_form";
import Login from "./routes/login";
import "./index.css";

export default function App() {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <Fragment>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route exact path="/" element={<PrivateRoute />}>
              <Route exact path="/main" element={<Main />}></Route>
            </Route>
            <Route exact path="/" element={<PrivateRoute />}>
              <Route
                exact
                path="/checkout_form"
                element={<CheckoutForm />}
              ></Route>
            </Route>
          </Routes>
        </Fragment>
      </Router>
    </AuthContext.Provider>
  );
}
