import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./containers/Pages/Home";
import Properties from "./containers/Pages/Properties";
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/propriedades" component={Properties} exact />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;