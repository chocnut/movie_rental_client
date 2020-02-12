import React from "react";
import ProtectedRoute from "../../routes/ProtectedRoute";
import { Switch } from "react-router-dom";
import List from "./List";

const Container = () => {
  return (
    <>
      <>
        <Switch>
          <ProtectedRoute exact component={List} path="/rentals" />
        </Switch>
      </>
    </>
  );
};
export default Container;
