/* globals document, window */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Home from './components/Home';
import ResumeApp from './components/ResumeApp';
import NotFound from './components/NotFound';
import Animations from './components/Animations';

import './assets/scss/style.scss';
import './assets/js/vendor/modernizr.min.js';

const routes = (
  <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route component={Animations}>
      <Route path="/" component={Home} />
      <Route path="/info" component={ResumeApp} />
      <Route path="/create" component={ResumeApp} />
      <Route path="/preview" component={ResumeApp} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('app'));
