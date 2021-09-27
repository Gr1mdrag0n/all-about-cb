import React from "react";
import { HashRouter, BrowserRouter, Switch, Route } from 'react-router-dom'
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
  <HashRouter basename='/'>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/bar">Bar</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={App} />
      <Route path="/bar" component={Bar} />
    </div>
  </HashRouter>
);

export default Router;