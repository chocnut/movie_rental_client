import React from "react";
import ProtectedRoute from "../../routes/ProtectedRoute";
import { Switch } from "react-router-dom";
import List from "./List";
import Details from "./Details";

const Container = () => {
  return (
    <>
      <Switch>
        <ProtectedRoute exact component={Details} path="/movies/:id" />
        <ProtectedRoute exact component={List} path="/movies" />
      </Switch>
    </>
  );
};

export default Container;
