import React from "react";
import UpTime from "./UpTime";
import InNum from "./InNum";
import RealTime from "./RealTime";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SlotNav from "./SlotNav";

const Slot = () => {
  return (
    <BrowserRouter>
      <div>
        <SlotNav />

        <Switch>
          <Route path="/UpTime" component={UpTime} />
          <Route path="/InNum" component={InNum} />
          <Route path="/RealTime" component={RealTime} />
          <h1>Select anyone</h1>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Slot;
