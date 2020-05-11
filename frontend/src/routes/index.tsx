import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";

import Starter from "../pages/Starter";

import GoStackDashboard from "../pages/GoStack/Dashboard";
import GoStackJourney from "../pages/GoStack/Journey";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />

      <Route path="/starter" component={Starter} />

      <Route path="/gostack" exact component={GoStackDashboard} />
      <Route path="/gostack/journey" component={GoStackJourney} />
    </Switch>
  );
};

export default Routes;
