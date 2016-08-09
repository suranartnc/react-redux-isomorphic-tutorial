import config from 'shared/configs';

import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import getRoutes from 'shared/routes.dev';

class Root extends Component {
  render() { 
    const { store } = this.props;
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
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;