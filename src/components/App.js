import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact>{<Home />}</Route>
        <Route path="/actors" exact>{<Actors />}</Route>
        <Route path="/directors" exact>{<Directors />}</Route>
        <Route path="/movies" exact>{<Movies />}</Route>
      </Switch>
    </div>
  )
}

export default App;
