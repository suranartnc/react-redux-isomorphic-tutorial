import React from 'react';
import ReactDOM from 'react-dom';

import { browserHistory, Router } from 'react-router';
import routes from 'shared/routes';

import { Provider } from 'react-redux';
import createStore from 'shared/store/createStore';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, 
  document.getElementById('root'));