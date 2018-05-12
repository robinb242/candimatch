/* taking all info gathered by app.js and render it out to index.html*/

import React from "react";
import ReactDOM from "react-dom";
import 'semantic-ui-css/semantic.min.css';
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";


ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
