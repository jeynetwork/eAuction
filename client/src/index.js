import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Header from "./components/Header";
import Sellers from "./components/Sellers";
import Bidders from "./components/Bidders";
import Account from "./components/Account";
import Auctions from "./App";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <Header>
            <Auctions />
          </Header>
        )}
      />

      <Route
        exact
        path="/auctions"
        render={() => (
          <Header>
            <Auctions />
          </Header>
        )}
      />

      <Route
        path="/bidders"
        render={() => (
          <Header>
            <Bidders />
          </Header>
        )}
      />

      <Route
        path="/sellers"
        render={() => (
          <Header>
            <Sellers />
          </Header>
        )}
      />

      <Route
        path="/account"
        render={() => (
          <Header>
            <Account />
          </Header>
        )}
      />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
