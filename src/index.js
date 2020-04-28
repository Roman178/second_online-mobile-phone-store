import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./index.css";
import "antd/dist/antd.css";
import "./index.css";
// import configureStore from "./redux/configureStore";
// import { Provider } from "react-redux";

// const store = configureStore(); // if you're wanting to rehydrate your store using some separate state that's passed down from the server or stored in local storage, then this would be a good place to do so.

render(
  // <Provider store={store}>
  <Router>
    <App />
  </Router>,
  // {/* </Provider>, */}
  document.getElementById("app")
);
