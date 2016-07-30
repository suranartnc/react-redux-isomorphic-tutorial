import React from 'react';
import ReactDOM from 'react-dom';

import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import createStore from 'shared/store/createStore';
const store = createStore();

import { AppContainer } from 'react-hot-loader';
import Root from 'shared/containers/Root';

ReactDOM.render(
  <AppContainer>
    <Root 
      store={store} 
      history={syncHistoryWithStore(browserHistory, store)} />
  </AppContainer>, 
  document.getElementById('root')
);

if (module.hot) {
  console.log('reload');
  module.hot.accept('shared/containers/Root', () => {
    const NextApp = require('shared/containers/Root').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp
          store={store} 
          history={syncHistoryWithStore(browserHistory, store)} />
      </AppContainer>,
      document.getElementById('root')
    );
  }); 
}