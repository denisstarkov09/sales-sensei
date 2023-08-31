import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/auth";

function PrivateRoute({ component: Component, ...rest }) {
  const { authTokens } = useAuth();
  const sub_scription =
    window.localStorage.sub_scription === undefined
      ? { email: "" }
      : JSON.parse(window.localStorage.sub_scription);

  return authTokens === undefined ? (
    <Navigate to="/login" />
  ) : authTokens.isLoggedIn === 1 &&
    authTokens.email === sub_scription.email ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
}

export default PrivateRoute;
