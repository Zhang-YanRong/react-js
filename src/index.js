import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import IRoute from "./router/config.js";

ReactDOM.render( < IRoute / > , document.getElementById('root'));

serviceWorker.unregister();