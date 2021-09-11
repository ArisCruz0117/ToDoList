import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Store from "./redux/store";
import { Provider } from "react-redux";

const Root = (
  <Provider store={Store}>
      <App />
  </Provider>
);

ReactDOM.render(Root, document.getElementById("root"));
