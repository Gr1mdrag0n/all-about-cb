import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Bar from "./Bar";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/all-about-cb/bar" component={Bar} />
      <Route exact path="/" component={App} />
      <Route component={App} />
    </Switch>
  </BrowserRouter>
);

export default Router;
