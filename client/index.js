import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import CreateRecipe from './components/createRecipe';
import rootReducer from './reducers';

import 'normalize-css/normalize.css';
import 'flexboxgrid/dist/flexboxgrid.css';
import 'font-awesome/scss/font-awesome.scss';

import './index.scss';

ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='/create' component={CreateRecipe} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
