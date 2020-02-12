import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ProtectedRoute from "../routes/ProtectedRoute";
import { Login, Movies, Signup, Logout, Rentals } from "../pages";

const App = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="/signup" component={Signup} />
      <ProtectedRoute
        exact
        path="/"
        component={() => <Redirect to="/movies" />}
      />
      <ProtectedRoute path="/movies" component={Movies} />
      <ProtectedRoute exact path="/rentals" component={Rentals} />
    </Switch>
  </Router>
);

export default App;
