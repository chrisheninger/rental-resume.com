/* globals document, window */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App';
import registerServiceWorker from './service-worker-registration';

import './index.css';

const routes = (
  <Router>
    <Route component={App} />
  </Router>
);

ReactDOM.render(routes, document.getElementById('app'));

registerServiceWorker();
