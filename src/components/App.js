import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "../routes/ProtectedRoute";
import { Login, Movies, Signup, Logout, Rentals } from "../pages";

const App = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="/signup" component={Signup} />
      <ProtectedRoute path="/" component={Movies} exact />
      <ProtectedRoute path="/rentals" component={Rentals} exact />
    </Switch>
  </Router>
);

export default App;
