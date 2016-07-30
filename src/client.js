import React from 'react';
import ReactDOM from 'react-dom';

import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import createStore from 'shared/store/createStore';
const store = createStore();

import Root from 'shared/containers/Root';

ReactDOM.render(
  <Root store={store} history={syncHistoryWithStore(browserHistory, store)} />, 
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('shared/containers/Root', () => {
    const NextApp = require('shared/containers/Root').default;
    ReactDOM.render(
      <NextApp />,
      document.getElementById('root')
    );
  }); 
}