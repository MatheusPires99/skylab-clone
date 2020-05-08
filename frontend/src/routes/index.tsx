import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Starter from "../pages/Starter";
import GoStack from "../pages/GoStack";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/starter" component={Starter} />
      <Route path="/gostack" component={GoStack} />
    </Switch>
  );
};

export default Routes;
