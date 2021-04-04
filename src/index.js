import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <React.StrictMode>
    <div className="page-container">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
