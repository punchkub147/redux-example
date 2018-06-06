import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home, Item, Profile } from "./pages";
import { Nav } from "./components";

const exact = true;
const pages = [
  { name: "home", path: "/", component: Home, exact },
  { name: "item", path: "/item", component: Item },
  { name: "profile", path: "/profile", component: Profile }
];

export default class extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav pages={pages} />
          {pages.map(({ path, component, exact }, key) => (
            <Route path={path} component={component} exact={exact} key={key} />
          ))}
        </div>
      </Router>
    );
  }
}
