import React, { ReactElement } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Exhibition from "pages/Exhibition";
import HostExhibition from "pages/Exhibition/Host";
import ForgotPassword from "pages/ForgotPassword";
import Home from "pages/Home";
import NewProject from "pages/NewProject";
import Project from "pages/Project";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import User from "pages/User";

const AppRoutes = (): ReactElement => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />

      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/forgot" component={ForgotPassword} />

      <Route exact path="/exhibition" component={Exhibition} />
      <Route path="/exhibition/host" component={HostExhibition} />

      <Route exact path="/new" component={NewProject} />

      <Route exact path="/:username" component={User} />
      <Route exact path="/:authorUsername/:projectTitle" component={Project} />
    </Switch>
  </HashRouter>
);

export default AppRoutes;
