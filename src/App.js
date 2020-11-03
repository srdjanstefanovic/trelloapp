import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import TrelloBoard from "./containers/TrelloBoard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Header />
          <TrelloBoard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
