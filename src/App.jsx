import React, { useEffect } from "react";
import routes from "@/routes.js";
import { renderRoutes } from "react-router-config";
import { HashRouter, Switch, useHistory } from "react-router-dom";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "@/reducer";
import thunk from "redux-thunk";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";

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

const AnimeRouter = () => {
  const { location } = useHistory();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        classNames="fade"
        appear={true}
        unmountOnExit={true}
        timeout={300}
      >
        <RouterContainer>
          <Switch location={location}>{renderRoutes(routes)}</Switch>
        </RouterContainer>
      </CSSTransition>
    </TransitionGroup>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <div className="app-wrap">
        <HashRouter>
          <AnimeRouter />
        </HashRouter>
      </div>
    </Provider>
  );
};

export default App;
