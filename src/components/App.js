import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "../routes/PrivateRoute";
import { Login, Movies } from "../pages";

const App = () => (
  <Router>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <PrivateRoute path="/movies">
        <Movies />
      </PrivateRoute>
    </Switch>
  </Router>
);

export default App;
