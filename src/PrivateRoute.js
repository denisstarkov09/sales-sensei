import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/auth";

function PrivateRoute({ component: Component, ...rest }) {
  const { authTokens } = useAuth();

  return authTokens ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
