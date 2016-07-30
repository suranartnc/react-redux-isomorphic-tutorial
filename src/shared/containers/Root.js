import React from 'react';

import { Router, applyRouterMiddleware } from 'react-router';
import useScroll from 'react-router-scroll';
import { Provider } from 'react-redux';
import routes from 'shared/routes';

import { DevTools } from 'shared/components';

const Root = ({store, history}) => {
  return (
    <Provider store={store}>
      <div>
        <Router history={history} routes={routes} render={applyRouterMiddleware(useScroll())} />
        <DevTools />
      </div>
    </Provider>
  );
}

export default Root;