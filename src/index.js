import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import reducers from "./reducers";
import MyApp from "./App";

const store = createStore(
  reducers,
  applyMiddleware(
    // createLogger(),
    thunk
  )
);
const App = () => (
  <Provider store={store}>
    <MyApp />
  </Provider>
);

render(<App />, document.getElementById("root"));
