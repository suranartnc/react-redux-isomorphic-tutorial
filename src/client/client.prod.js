import React from 'react';
import { render } from 'react-dom';
import { browserHistory, match, Router } from 'react-router';
import { Provider } from 'react-redux';

import getRoutes from 'shared/routes/routes.prod';
import createStore from 'shared/store/createStore';
import { syncHistoryWithStore } from 'react-router-redux';

const initialState = window.__INITIAL_STATE__;
const store = createStore(browserHistory, initialState);
const routes = getRoutes(store);
const history = syncHistoryWithStore(browserHistory, store);
const rootEl = document.getElementById('root');

match({ history, routes }, (error, redirectLocation, renderProps) => {
  render(
  	<Provider store={store} key="provider">
      <Router {...renderProps} />
  	</Provider>,
    rootEl
  );
})