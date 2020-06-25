import React from "react";
import Menu from "./Menu";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Calculator from "./Calculator";
import Netflix from "./Netflix";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <Switch>
        <Route path="/Calculator" component={Calculator} />
          <Route path="/Netflix" component={Netflix} />
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  ); 
}

export default App;
