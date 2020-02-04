import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "../routes/ProtectedRoute";
import { Login, Movies, Signup } from "../pages";

const App = () => (
  <Router>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <ProtectedRoute path="/movies">
        <Movies />
      </ProtectedRoute>
    </Switch>
  </Router>
);

export default App;
