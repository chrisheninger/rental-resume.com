import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-jss';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import theme from './theme';
import './index.css';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);

// registerServiceWorker();
