import React from "react";

// router
import routes from "@/routes.js";
import { renderRoutes } from "react-router-config";
import { HashRouter, withRouter } from "react-router-dom";

// redux
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "@/reducer";
import thunk from "redux-thunk";

// components
import AnimatedSwitch from "@/components/AnimeRouterSwitch";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

const RouterComponent = withRouter(({ location }) => (
  <AnimatedSwitch>{renderRoutes(routes, {}, { location })}</AnimatedSwitch>
));

const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <RouterComponent />
      </HashRouter>
    </Provider>
  );
};

export default App;
