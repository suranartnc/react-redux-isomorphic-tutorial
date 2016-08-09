import React from 'react';
import { render } from 'react-dom';
import { browserHistory, match, Router } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import Root from 'shared/containers/Root/Root';
import getRoutes from 'shared/routes';
import createStore from 'shared/store/createStore';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

const store = createStore(browserHistory, window.__INITIAL_STATE__);
const routes = getRoutes(store);
const history = syncHistoryWithStore(browserHistory, store);
const rootEl = document.getElementById('root');

match({ history, routes }, (error, redirectLocation, renderProps) => {
  render(
    <AppContainer>
      <Provider store={store} key="provider">
        <Router {...renderProps} />
      </Provider>
    </AppContainer>,
    rootEl
  );
})

if (module.hot) {
  module.hot.accept('shared/containers/Root/Root', () => {
    const NextRootApp = require('shared/containers/Root/Root').default;

    render(
      <AppContainer>
        <NextRootApp store={store} history={history} routes={routes} />
      </AppContainer>,
      rootEl
    );
  });
}