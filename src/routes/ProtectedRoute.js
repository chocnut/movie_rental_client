import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ children, isAuthenticated, ...rest }) => {
  const authToken = localStorage.getItem("authToken");
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authToken ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
