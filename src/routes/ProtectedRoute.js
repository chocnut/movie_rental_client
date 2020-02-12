import React from "react";
import { Route, Redirect } from "react-router-dom";
import Layout from "../components/Layout";

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  const authToken = localStorage.getItem("authToken");
  return (
    <Route
      {...rest}
      render={props =>
        authToken ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
