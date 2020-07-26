import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchBooks from "./pages/SearchBooks";
// import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import SavedBooks from "./pages/SavedBooks";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/search"]}>
            <SearchBooks />
          </Route>
          <Route exact path="/savedBooks">
            <SavedBooks />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
