import React from 'react';
import { render } from "react-dom";
import './css/index.css';
import registerServiceWorker from './components/registerServiceWorker';
import Router from "./components/Router";

render(<Router />, document.querySelector("#root"));
registerServiceWorker();