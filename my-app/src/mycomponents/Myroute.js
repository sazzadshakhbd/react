import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import NotFound from "../pages/NotFound";

class MyRoute extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio/:username" component={Portfolio} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default MyRoute;
