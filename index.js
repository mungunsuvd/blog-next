import React from "react";
import ReactDOM from "react-dom";

import App from "./pages/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

import { UserStore } from "./context/UserContext";

const loggerMiddlaware = (store) => {
  return (next) => {
    return (action) => {
      console.log("MyLoggerMiddleware: Dispatching ==> ", action);
      console.log("MyLoggerMiddleware: State BEFORE : ", store.getState());
      const result = next(action);
      console.log("MyLoggerMiddleware: State AFTER : ", store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  burgerReducer,
  orderReducer,
  signupReducer,
});

const middlewares = [thunk];

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <UserStore>
        <App />
      </UserStore>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
