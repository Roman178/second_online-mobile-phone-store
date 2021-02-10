import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";

import configureStore from "./redux/configureStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import ScrollToTop from "./components/ScrollToTop";

const store = configureStore();
const persistor = persistStore(store);

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        {/* <ScrollToTop /> */}
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("app")
);
