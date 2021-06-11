import React from "react";
import "antd/dist/antd.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreen from "./MasterSession/Screen/HomeScreen";
import WatchList from "./MasterSession/Screen/WatchList/WatchList";
import HeaderNav from "./MasterSession/Screen/HeaderNav";
import SingleView from "./MasterSession/Screen/SingleView";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <HeaderNav />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/watchlist" component={WatchList} />
          <Route exact path="/watchlist/:id" component={SingleView} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
