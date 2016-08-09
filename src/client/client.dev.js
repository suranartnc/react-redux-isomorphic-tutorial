import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import Root from 'shared/containers/Root/Root';
import createStore from 'shared/store/createStore';

const initialState = window.__INITIAL_STATE__;
const store = createStore(browserHistory, initialState);
const rootEl = document.getElementById('root');

render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('shared/containers/Root/Root', () => {
    const NextRootApp = require('shared/containers/Root/Root').default;

    render(
      <AppContainer>
        <NextRootApp store={store} />
      </AppContainer>,
      rootEl
    );
  });
}