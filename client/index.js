import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import App from './App';

import 'normalize-css/normalize.css';
import 'flexboxgrid/dist/flexboxgrid.css';

import './index.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App} />
  </Router>,
  document.getElementById('root')
);
