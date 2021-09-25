import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from "./App";
import Bar from "./Bar";

class DebugRouter extends BrowserRouter {
  constructor(props) {
    super(props);
    console.log('initial history is: ', JSON.stringify(this.history, null, 2))
    this.history.listen((location, action) => {
      console.log(
        `The current URL is ${location.pathname}${location.search}${location.hash}`
      )
      console.log(`The last navigation action was ${action}`, JSON.stringify(this.history, null, 2));
    });
  }
}

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/all-about-cb" component={App} />
      <Route exact path="/all-about-cb/bar" component={Bar} />
      <Route component={App} />
    </Switch>
  </BrowserRouter>
);

export default Router;
