import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./containers/Pages/Home";
import Properties from "./containers/Pages/Properties";
import Detail from "./containers/Pages/Detail";
import Calendar from "./containers/Pages/Calendar";
import Clients from "./containers/Pages/Clients";
import Budgets from "./containers/Pages/Budgets";
import Control from "./containers/Pages/Control";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Properties} exact />
        <Route path="/propriedades" component={Properties} exact />
        <Route path="/propriedades/detalhe/:id" component={Detail} exact />
        <Route path="/calendario" component={Calendar} exact />
        <Route path="/clientes" component={Clients} exact />
        <Route path="/orcamentos" component={Budgets} exact />
        <Route path="/controle" component={Control} exact />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;