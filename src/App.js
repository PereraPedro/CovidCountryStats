import React from "react";

import "./App.css";
import NavBar from "./componets/NavBar";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import Info from "./componets/Info";
import Finder from "./componets/Finder";

///////////////// REDUX THINGS  //////////////////

import { Provider } from "react-redux";

import store from "./Redux/reducer/index";

///////////////////////////////////

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <NavBar />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Info}>
              <Info />
            </Route>
            <Route path="/Finder">
              <Finder />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
