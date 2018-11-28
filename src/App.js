import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./container/Home";
import Management from "./container/Management";

import "antd/dist/antd.css";
import EmptyPage from "./components/EmptyPage";
export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/mangement" component={Management} />
          <Route path="/404" component={EmptyPage} />
          <Redirect to="/404" />
        </Switch>
      </div>
    );
  }
}
