import React from "react";
import { Route, Redirect } from "react-router-dom";
import Layout from "../components/Layout";

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  const authToken = localStorage.getItem("authToken");
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authToken ? (
          <Layout>
            <Component />
          </Layout>
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
