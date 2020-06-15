import React from "react";
import routes from "@/routes.js";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "@/reducer";
import thunk from "redux-thunk";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

const App = () => {
  return (
    <Provider store={store}>
      <div className="app-wrap">
        <HashRouter>{renderRoutes(routes)}</HashRouter>
      </div>
    </Provider>
  );
};

export default App;
