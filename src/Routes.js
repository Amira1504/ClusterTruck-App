import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import AppliedRoute from "./components/AppliedRoute";
import Signup from "./containers/Signup";
import AddOrder from "./containers/AddOrder";
import YourGroups from "./containers/YourGroups";




export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/signup" exact component={Signup} props={childProps} />
    <AppliedRoute path="/orders/add" exact component={AddOrder} props={childProps} />
    <AppliedRoute path="/groups/your" exact component={YourGroups} props={childProps} />


    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;
