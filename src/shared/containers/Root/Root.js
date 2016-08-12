import config from 'shared/configs';

import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import getRoutes from 'shared/routes/routes.dev';

const Root = ({ store }) => {
  const routes = getRoutes(store);
  const history = syncHistoryWithStore(browserHistory, store);  

  return (
    <Provider store={store} key="provider">
      <Router 
        history={history}
        routes={routes} />
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;