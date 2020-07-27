import React, { useEffect } from "react";
import routes from "@/routes.js";
import { renderRoutes } from "react-router-config";
import {
  HashRouter,
  Switch,
  useHistory,
  BrowserRouter,
  Router,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "@/reducer";
import thunk from "redux-thunk";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";

import Index from "@/pages/Index";
import Playground from "@/pages/Playground";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

const RouterContainer = styled.div`
  .fade-enter,
  .fade-appear {
    opacity: 0;
  }

  .fade-enter.fade-enter-active,
  .fade-appear.fade-appear-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0;
  }
`;

const AnimatedSwitch = withRouter(({ location }) => (
  <RouterContainer>
    <TransitionGroup className={"router-wrapper"}>
      <CSSTransition
        classNames={"fade"}
        appear={true}
        key={location.pathname}
        timeout={300}
        unmountOnExit={true}
      >
        <Switch location={location}>
          <Route exact path="/" render={() => <Redirect path="/index" />} />
          <Route exact path="/index" component={Index} />
          <Route exact path="/playground" component={Playground} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  </RouterContainer>
));

const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <AnimatedSwitch />
      </HashRouter>
    </Provider>
  );
};

export default App;
