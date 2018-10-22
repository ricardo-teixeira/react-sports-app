import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "./views/Home";
import Posts from "./views/Posts";
import Albums from "./views/Albums";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user/:userId/posts/" component={Posts} />
          <Route exact path="/user/:albumId/albums/" component={Albums} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
