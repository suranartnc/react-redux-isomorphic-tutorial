import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router/es6';
import { AppContainer } from 'react-hot-loader';
import Root from 'shared/containers/Root/Root';

const rootEl = document.getElementById('root');

render(
  <AppContainer>
    <Root history={browserHistory} />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('shared/containers/Root/Root', () => {
    const NextRootApp = require('shared/containers/Root/Root').default;

    render(
      <AppContainer>
        <NextRootApp history={browserHistory} />
      </AppContainer>,
      rootEl
    );
  });
}
